import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { cloneDeep } from 'lodash';

import {
  Box,
  ChakraProps,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';

import { Loading, SubmitButton } from '@components/common';

import { ROUTES } from '@constants/routes';
import { intComma } from '@utils/format';

import CartCard from './_fragment/CartCard';
import EmptyCart from './_fragment/EmptyCart';
import { useGetCart } from './_hook/useCartData';

interface CartPageProps extends ChakraProps {}

interface CartType {
  cartId: number;
  count: number;
  id: number;
  productId: number;
}
function CartPage({ ...basisProps }: CartPageProps) {
  const router = useRouter();

  const { isLoading, data: cart } = useGetCart();

  const [checkedItems, setCheckedItems] = useState(
    Array(cart.length).fill(false),
  );

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  if (isLoading) return <Loading />;
  if (cart.length === 0) return <EmptyCart />;

  return (
    <Box {...basisProps}>
      <Stack divider={<Divider bg="gray.200" h="10px" />}>
        <HStack color="gray.600" justify="space-between">
          <Checkbox
            colorScheme="commerse"
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={() => {
              if (checkedItems.every((b) => b === true))
                setCheckedItems(cloneDeep(checkedItems.fill(false)));
              else setCheckedItems(cloneDeep(checkedItems.fill(true)));
              console.log(checkedItems);
            }}
          >
            모두선택
          </Checkbox>
          <Text>선택삭제</Text>
        </HStack>
        {cart.map((cartItem: CartType, i: number) => {
          return (
            <HStack key={cartItem.id} align="start">
              <Checkbox
                value={i}
                isChecked={checkedItems[i]}
                colorScheme="commerse"
                onChange={(e) => {
                  const newArr = checkedItems.map((v, idx) =>
                    idx === Number(e.target.value) ? !v : v,
                  );
                  setCheckedItems(newArr);
                }}
              ></Checkbox>
              <CartCard cartItem={cartItem} />;
            </HStack>
          );
        })}
        <Stack h="auto" spacing="4" pb="70px">
          <HStack color="gray.600" justify="space-between">
            <Text>총 상품금액</Text>
            <Text>{intComma(108000)}</Text>
          </HStack>
          <HStack color="gray.600" justify="space-between">
            <Text>총 배송비</Text>
            <Text>{intComma(0)}원</Text>
          </HStack>
          <Divider />
          <HStack justify="space-between">
            <Text>결제금액</Text>
            <Text variant="boldcommerse">{intComma(108000)}원</Text>
          </HStack>
          <SubmitButton
            title="결제하기"
            size="btnlg"
            variant="btncommerse"
            onClick={() => router.push(ROUTES.PURCHASE.MAIN)}
          />
        </Stack>
      </Stack>
    </Box>
  );
}

export default CartPage;
