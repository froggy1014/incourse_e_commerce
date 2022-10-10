import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import {
  Box,
  ChakraProps,
  Checkbox,
  Divider,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';

import { SubmitButton } from '@components/common';

import { ROUTES } from '@constants/routes';
import { axiosInstance } from '@utils/axios';
import { intComma } from '@utils/format';

import CartCard from './_fragment/CartCard';
import EmptyCart from './_fragment/EmptyCart';

interface CartPageProps extends ChakraProps {}

interface resultsType {
  name: string;
  volumn: number;
  price: number;
  count: 1;
}

interface CartType {
  cartId: number;
  count: number;
  id: number;
  productId: number;
}

const results: resultsType[] = [
  {
    name: '바스 & 샴푸',
    volumn: 120,
    price: 27000,
    count: 1,
  },
  {
    name: '바스 & 샴푸',
    volumn: 120,
    price: 27000,
    count: 1,
  },
];
function CartPage({ ...basisProps }: CartPageProps) {
  const router = useRouter();
  const { userid } = useSelector((state: RootStateOrAny) => state.USER);
  const [data, setData] = useState<CartType[]>();

  useEffect(() => {
    async function cartFunc() {
      await axiosInstance(`cart/?user_id=${userid}`)
        .then((res) => res.data[0].cartitem)
        .then((data) => setData(data));
    }
    cartFunc();
  }, []);

  if (!data) return <h1>Loading</h1>;

  console.log(data);
  data.map((item) => {
    console.log(item);
  });
  if (results.length === 0) return <EmptyCart />;
  return (
    <Box {...basisProps}>
      <Stack divider={<Divider bg="gray.200" h="10px" />}>
        <HStack color="gray.600" justify="space-between">
          <Checkbox size="sm" colorScheme="commerse">
            모두선택
          </Checkbox>
          <Text>선택삭제</Text>
        </HStack>
        {data.map((cartItem) => {
          return <CartCard key={cartItem.id} cartItem={cartItem} />;
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
