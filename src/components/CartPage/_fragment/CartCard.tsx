import React, { useState } from 'react';
import { useQueryClient } from 'react-query';

import {
  Box,
  Checkbox,
  CloseButton,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

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
  const [counting, setCounting] = useState({
    id: cartItem.id,
    count: cartItem.count,
  });
  // const [product, setProduct] = useState<productType>();
  const [state, setState] = useState({
    count: 0,
    price: 0,
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
      } else if (name === 'plus') {
        setCounting((counting) => {
          return { ...counting, count: counting.count + 1 };
        });
      }
    }
    await calculate();
    CountingItem();
  };

  const { mutate } = useDeleteCart(onSuccess);
  const { mutate: patchItem } = usePatchCartItem(counting, onSuccess);
  const { data: product, isLoading } = useGetItemInfo(cartItem.productId);
  const cartDelete = () => {
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
              {cartItem.count}
            </Text>
            <Box>
              <QtyPlusIcon onClick={() => handleClick('plus')} />
            </Box>
          </HStack>
          <Text variant="bold16gray" color="gray.600">
            {intComma(cartItem.count * product.price)}원
          </Text>
        </HStack>
      </Stack>
      <HStack w="100%" justify="space-between" py="10px">
        <Text>{state.price >= 30000 ? '배송비무료' : '배송비 2500원'}</Text>
        <Text variant="boldcommerse">
          {intComma(cartItem.count * product.price)}원
        </Text>
      </HStack>
    </Stack>
  );
}

export default CartCard;
