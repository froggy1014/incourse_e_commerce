import Link from 'next/link';
import React from 'react';

import { ChakraProps, Text, VStack } from '@chakra-ui/react';

import { ROUTES } from '@constants/routes';
import { SubmitButton } from '@shareComponents/index';

interface EmptyCartType extends ChakraProps {}

function EmptyReview({ ...basisProps }: EmptyCartType) {
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
        <Text fontWeight="bold">작성하신 리뷰가 없습니다.</Text>
        <Text fontWeight="bold">리뷰를 남기러 가볼까요?</Text>
      </VStack>
      <Link href={ROUTES.MYPAGE.ORDERHISTORY}>
        <a>
          <SubmitButton
            title="상품보러가기"
            size="btnmd"
            variant="btncommerse"
          />
        </a>
      </Link>
    </VStack>
  );
}

export default EmptyReview;
