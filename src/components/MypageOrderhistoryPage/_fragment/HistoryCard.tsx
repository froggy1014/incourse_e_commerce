import React from 'react';

import {
  Box,
  Button,
  ChakraProps,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import { formatDateDash, intComma } from '@utils/format';

interface productType {
  name: string;
  price: number;
  image: string;
  volume: number;
}

interface orderProductsType {
  id: number;
  order: string;
  product: productType[];
  count: number;
  shippingStatus: string;
  created: string;
}

const HistoryCard = ({
  orderProducts,
}: {
  orderProducts: orderProductsType;
}) => {
  const { count, shippingStatus, created } = orderProducts;
  return (
    <Stack mb="20px">
      <Text fontWeight="bold">[{formatDateDash(created)}]</Text>
      {orderProducts.product.map((product, i) => {
        const { name, price, image, volume } = product;
        return (
          <HStack key={i} fontSize="12px" justify="space-between">
            <HStack>
              <Image
                boxSize="60px"
                src="/images/orderHistory.png"
                bg="gray.100"
                rounded="5px"
              />
              <Box>
                <Text fontWeight="bold">{name}</Text>
                <Text variant="normal12gray">
                  {name} | {volume}ml
                </Text>
                <Text variant="boldcommerse">
                  {intComma(price)}원/ {count}개
                </Text>
              </Box>
            </HStack>
            <Stack align="end" spacing="0">
              <Text variant="boldcommerse">결제완료</Text>
              <Text>
                {price * count >= 30000 ? '무료배송' : '배송비 2,500원'}
              </Text>
            </Stack>
          </HStack>
        );
      })}
      <Flex justify="end">
        {shippingStatus === 'PAID' && (
          <Button colorScheme="commerse" w="140px" color="white">
            주문취소
          </Button>
        )}
        {shippingStatus === 'DONE' && (
          <Button
            bg="white"
            colorScheme="commerse"
            w="140px"
            color="commerse.500"
          >
            리뷰작성
          </Button>
        )}
      </Flex>
    </Stack>
  );
};

export default HistoryCard;
