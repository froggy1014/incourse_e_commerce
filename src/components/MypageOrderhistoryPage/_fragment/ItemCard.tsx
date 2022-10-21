import React from 'react';
import { useQuery } from 'react-query';

import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react';

import { Loading } from '@components/common';

import { intComma } from '@utils/format';

import { IItem } from '../OrderHistory';
import { getProductDetail } from '../_Hooks/useGetOrderQuery';

const ItemCard = ({ item }: { item: IItem }) => {
  const { data, isLoading } = useQuery(['productDetail', item.productId], () =>
    getProductDetail(item.productId),
  );

  if (isLoading) return <Loading />;

  return (
    <HStack fontSize="12px" justify="space-between">
      <HStack>
        <Image
          boxSize="60px"
          src="/images/orderHistory.png"
          bg="gray.100"
          rounded="5px"
        />
        <Box>
          <Text fontWeight="bold">{data.name}</Text>
          <Text variant="normal12gray">
            {data.name} | {data.capacity}ml
          </Text>
          <Text variant="boldcommerse">
            {intComma(data.price)}원/ {item.count}개
          </Text>
        </Box>
      </HStack>
      <Stack align="end" spacing="0">
        <Text variant="boldcommerse">결제완료</Text>
        {/* <Text>
          {price * count >= 30000 ? '무료배송' : '배송비 2,500원'}
        </Text> */}
      </Stack>
    </HStack>
  );
};

export default ItemCard;
