import React, { useEffect, useState } from 'react';

import {
  Box,
  Button,
  ChakraProps,
  Checkbox,
  CloseButton,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import { QtyMinusIcon, QtyPlusIcon } from '@components/common/@Icons/UI';

import { axiosInstance } from '@utils/axios';
import { intComma } from '@utils/format';

interface CartItemType {
  cartItem: {
    cartId: number;
    count: number;
    id: number;
    productId: number;
  };
}

interface productType {
  avgRate: number | null;
  capacity: number;
  description: string;
  detail: string;
  id: number;
  name: string;
  photo: string;
  price: number;
  reviewCount: number;
}

// interface CartCardProps extends ChakraProps {}
interface CartCardProps extends CartItemType {}

function CartCard({ cartItem }: CartCardProps) {
  const [product, setProduct] = useState<productType>();
  const [state, setState] = useState({
    count: 0,
    price: 0,
  });
  useEffect(() => {
    axiosInstance(`product/${cartItem.productId}/`).then((res) => {
      setProduct(res.data);
      setState((state) => {
        return {
          count: cartItem.count,
          price: cartItem.count * res.data.price,
        };
      });
    });
  }, []);

  const cartDelete = () => {
    console.log('delete');
    axiosInstance.delete(`cart/item/${cartItem.id}/`);
  };

  if (!product) return <h1>Loading</h1>;
  console.log(cartItem);
  console.log(product);
  return (
    <HStack align="flex-start" justify="space-evenly">
      <Checkbox size="sm" colorScheme="commerse"></Checkbox>
      <Stack w="100%">
        <HStack>
          <Stack w="100%">
            <HStack justify="space-between" position="relative">
              <HStack>
                <Image
                  boxSize="60px"
                  src="/images/orderHistory.png"
                  bg="gray.100"
                  rounded="5px"
                />
                <Box>
                  <Text fontWeight="bold">{product.name}</Text>
                  <Text variant="normal12gray">
                    {product.name} | {product.capacity}ml
                  </Text>
                  <Text variant="boldcommerse">
                    {intComma(product.price)}원
                  </Text>
                </Box>
              </HStack>
              <CloseButton
                position="absolute"
                top="-5px"
                right="0"
                onClick={cartDelete}
              />
            </HStack>
          </Stack>
        </HStack>
        <Stack w="100%" h="80px" bg="gray.200" p="10px">
          <Text w="100%" text-align="left" variant="normal16gray">
            {product.name}
          </Text>
          <HStack w="100%" justify="space-between">
            <HStack rounded="5px" spacing="1px">
              <Box
                as="button"
                disabled={state.count === 1}
                onClick={() =>
                  setState((state) => {
                    return {
                      count: state.count - 1,
                      price: state.price - product.price,
                    };
                  })
                }
              >
                <QtyMinusIcon />
              </Box>
              <Text
                w="25px"
                h="25px"
                textAlign="center"
                bg="white"
                color="gray.800"
              >
                {state.count}
              </Text>
              <Box
                onClick={() =>
                  setState((state) => {
                    return {
                      count: state.count + 1,
                      price: state.price + product.price,
                    };
                  })
                }
              >
                <QtyPlusIcon />
              </Box>
            </HStack>
            <Text variant="bold16gray" color="gray.600">
              {intComma(state.price)}원
            </Text>
          </HStack>
        </Stack>
        <HStack w="100%" justify="space-between" py="10px">
          <Text>{state.price >= 30000 ? '배송비무료' : '배송비 2500원'}</Text>
          <Text variant="boldcommerse">{intComma(state.price)}원</Text>
        </HStack>
      </Stack>
    </HStack>
  );
}

export default CartCard;
