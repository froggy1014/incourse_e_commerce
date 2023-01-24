import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { Box, CloseButton, HStack, Image, Stack, Text } from '@chakra-ui/react';

import { delCartItem } from '@apis/_axios/delete';
import { patchCartItem } from '@apis/_axios/patch/axiosPatch';
import {
  UserStateType,
  decCartState,
  incCartState,
  initCartState,
} from '@features/cart/cartSlice';

import { QtyMinusIcon, QtyPlusIcon } from '@icons/index';

import { Loading } from '@shareComponents/index';
import { intComma } from '@utils/format';

import { useGetItemInfo } from '../_hook/useCartData';

interface CartItemType {
  cartItem: {
    cartId: number;
    count: number;
    id: number;
    productId: number;
  };
}

interface CartCardProps extends CartItemType {
  checkedItems: boolean[];
  setCheckedItems: Dispatch<SetStateAction<boolean[]>>;
}

function CartCard({ cartItem }: CartCardProps) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const state = useSelector((state: RootStateOrAny) => state.CART);
  const idx = state.findIndex((item: UserStateType) => item.id === cartItem.id);

  const handleClick = async (name: string) => {
    if (name === 'minus' && state[idx].count !== 1) {
      patchItem.mutate({ id: state[idx].id, count: state[idx].count - 1 });
      dispatch(decCartState({ id: cartItem.id }));
    } else if (name === 'plus') {
      patchItem.mutate({ id: state[idx].id, count: state[idx].count + 1 });
      dispatch(incCartState({ id: cartItem.id }));
    }
  };
  const deleteCart = useMutation((pk: number) => delCartItem(pk), {
    onSuccess: () => {
      queryClient.invalidateQueries(['CartList']);
    },
  });
  const patchItem = useMutation(
    (count: { id: number; count: number }) => patchCartItem(count),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['CartList']);
      },
    },
  );
  const { data: product, isLoading } = useGetItemInfo(cartItem.productId);

  useEffect(() => {
    dispatch(
      initCartState({
        cartItem: cartItem,
        product: product,
      }),
    );
  }, [product, cartItem, dispatch]);
  if (isLoading || state[idx] === undefined) return <Loading />;

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
              onClick={() => deleteCart.mutate(cartItem.id)}
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
              <QtyMinusIcon
                onClick={() => {
                  handleClick('minus');
                }}
              />
            </Box>
            <Text
              w="25px"
              h="25px"
              textAlign="center"
              bg="white"
              color="gray.800"
            >
              {state[idx].count}
            </Text>
            <Box>
              <QtyPlusIcon
                onClick={() => {
                  handleClick('plus');
                }}
              />
            </Box>
          </HStack>
          <Text variant="bold16gray" color="gray.600">
            {intComma(state[idx].totalPrice)}원
          </Text>
        </HStack>
      </Stack>
      <HStack w="100%" justify="space-between" py="10px">
        <Text>
          {state[idx].totalPrice >= 30000 ? '배송비 무료' : '배송비 2500원'}
        </Text>
        <Text variant="boldcommerse">{intComma(state[idx].totalPrice)}원</Text>
      </HStack>
    </Stack>
  );
}

export default CartCard;
