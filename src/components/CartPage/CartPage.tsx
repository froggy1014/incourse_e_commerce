import React, { useState } from 'react';

import {
  Box,
  Button,
  ChakraProps,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

import { SubmitButton } from '@components/common';

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

const results: resultsType[] = [
  {
    name: '바스 & 샴푸',
    volumn: 120,
    price: 27000,
    count: 1,
  },
  // {
  //   name: '바스 & 샴푸',
  //   volumn: 120,
  //   price: 27000,
  //   count: 1,
  // },
];
function CartPage({ ...basisProps }: CartPageProps) {
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
        {results.map((result, i) => {
          return <CartCard key={i} results={result} />;
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
          <SubmitButton title="결제하기" sizes="btnlg" variant="btncommerse" />
        </Stack>
      </Stack>
    </Box>
  );
}

export default CartPage;
