import React, { useState } from 'react';

import { Button, ChakraProps, Stack, Text, VStack } from '@chakra-ui/react';

import { SubmitButton } from '@components/common';

interface EmptyCartType extends ChakraProps {}

function EmptyCart({ ...basisProps }: EmptyCartType) {
  return (
    <VStack
      w="100%"
      h="50vh"
      justify="center"
      align="center"
      spacing="30px"
      {...basisProps}
    >
      <VStack>
        <Text fontWeight="bold">장바구니가 비어있습니다.</Text>
        <Text fontWeight="bold">상품을 추가해보세요!</Text>
      </VStack>
      <SubmitButton title="상품보러가기" sizes="btnmd" variant="btncommerse" />
    </VStack>
  );
}

export default EmptyCart;
