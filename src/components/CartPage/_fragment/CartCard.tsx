import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { Box, CloseButton, HStack, Image, Stack, Text } from '@chakra-ui/react';

import {
  decPaymentState,
  emptyPaymentState,
  incPaymentState,
  initPaymentState,
} from '@features/payment/paymentSlice';

import { Loading } from '@components/common';
import { QtyMinusIcon, QtyPlusIcon } from '@components/common/@Icons/UI';

import { intComma } from '@utils/format';

import {
  useDeleteCart,
  useGetItemInfo,
  usePatchCartItem,
} from '../_hook/useCartData';

interface CartItemType {
  cartItem: {
    cartId: number;
    count: number;
    id: number;
    productId: number;
  };
}

// interface CartCardProps extends ChakraProps {}
interface CartCardProps extends CartItemType {}

function CartCard({ cartItem }: CartCardProps) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const {
    count,
    totalPrice,
    id: idx,
  } = useSelector((state: RootStateOrAny) => state.PAYMENT);
  const [index, setIndex] = useState(0);
  const [counting, setCounting] = useState({
    id: cartItem.id,
    count: cartItem.count,
  });
  const onSuccess = () => {
    return queryClient.invalidateQueries(['CartList']);
  };

  const handleClick = async (name: string) => {
    async function calculate() {
      if (name === 'minus' && counting.count !== 1) {
        setCounting((counting) => {
          return { ...counting, count: counting.count - 1 };
        });
        dispatch(decPaymentState({ id: cartItem.id }));
      } else if (name === 'plus') {
        setCounting((counting) => {
          return { ...counting, count: counting.count + 1 };
        });
        dispatch(incPaymentState({ id: cartItem.id }));
      }
    }
    await calculate();
    CountingItem();
  };

  const { mutate } = useDeleteCart(onSuccess);
  const { mutate: patchItem } = usePatchCartItem(counting, onSuccess);
  const { data: product, isLoading } = useGetItemInfo(cartItem.productId);
  const cartDelete = () => {
    dispatch(emptyPaymentState(cartItem.id));
    mutate(cartItem.id),
      {
        onSuccess,
      };
  };
  const CountingItem = () => {
    patchItem(),
      {
        onSuccess,
      };
  };

  useEffect(() => {
    dispatch(
      initPaymentState({
        id: cartItem.id,
        price: product?.price,
        count: cartItem.count,
      }),
    );
    setIndex(idx.indexOf(cartItem.id));
  }, [product, count]);
  if (isLoading) return <Loading />;

  return (
    <Stack w="100%" align="flex-start" justify="space-evenly">
      <HStack w="100%">
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
                <Text variant="boldcommerse">{intComma(product.price)}원</Text>
              </Box>
            </HStack>
            <CloseButton
              position="absolute"
              top="0"
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
            <Box>
              <QtyMinusIcon onClick={() => handleClick('minus')} />
            </Box>
            <Text
              w="25px"
              h="25px"
              textAlign="center"
              bg="white"
              color="gray.800"
            >
              {count[index]}
            </Text>
            <Box>
              <QtyPlusIcon onClick={() => handleClick('plus')} />
            </Box>
          </HStack>
          <Text variant="bold16gray" color="gray.600">
            {intComma(totalPrice[index])}원
          </Text>
        </HStack>
      </Stack>
      <HStack w="100%" justify="space-between" py="10px">
        <Text>
          {totalPrice[index] >= 30000 ? '배송비무료' : '배송비 2500원'}
        </Text>
        <Text variant="boldcommerse">{intComma(totalPrice[index])}원</Text>
      </HStack>
    </Stack>
  );
}

export default CartCard;
