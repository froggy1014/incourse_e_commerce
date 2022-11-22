import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { cloneDeep } from 'lodash';

import { Box, CloseButton, HStack, Image, Stack, Text } from '@chakra-ui/react';

import {
  decCartState,
  delCartState,
  incCartState,
  initCartState,
} from '@features/cart/cartSlice';

import { Loading } from '@components/common';
import { QtyMinusIcon, QtyPlusIcon } from '@icons/index';

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
interface CartCardProps extends CartItemType {
  checkedItems: boolean[];
  setCheckedItems: Dispatch<SetStateAction<boolean[]>>;
}

function CartCard({ cartItem }: CartCardProps) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const state = useSelector((state: RootStateOrAny) => state.CART);
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
        dispatch(decCartState({ id: cartItem.id }));
      } else if (name === 'plus') {
        setCounting((counting) => {
          return { ...counting, count: counting.count + 1 };
        });
        dispatch(incCartState({ id: cartItem.id }));
      }
    }
    await calculate();
    CountingItem();
  };

  const { mutate } = useDeleteCart(onSuccess);
  const { mutate: patchItem } = usePatchCartItem(counting, onSuccess);
  const { data: product, isLoading } = useGetItemInfo(cartItem.productId);
  const cartDelete = () => {
    dispatch(delCartState(cartItem.id));
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
      initCartState({
        cartItem: cartItem,
        product: product,
      }),
    );
  }, [product]);

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
              {state[state.findIndex((e: any) => e.id === cartItem.id)]?.count}
            </Text>
            <Box>
              <QtyPlusIcon onClick={() => handleClick('plus')} />
            </Box>
          </HStack>
          <Text variant="bold16gray" color="gray.600">
            {intComma(
              state[state.findIndex((e: any) => e.id === cartItem.id)]
                ?.totalPrice,
            )}
            원
          </Text>
        </HStack>
      </Stack>
      <HStack w="100%" justify="space-between" py="10px">
        <Text>
          {state[state.findIndex((e: any) => e.id === cartItem.id)]
            ?.totalPrice >= 30000
            ? '배송비 무료'
            : '배송비 2500원'}
        </Text>
        <Text variant="boldcommerse">
          {intComma(
            state[state.findIndex((e: any) => e.id === cartItem.id)]
              ?.totalPrice,
          )}
          원
        </Text>
      </HStack>
    </Stack>
  );
}

export default CartCard;
