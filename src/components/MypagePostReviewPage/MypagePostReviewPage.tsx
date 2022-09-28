import React from 'react';

import {
  Box,
  Button,
  ChakraProps,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';

import { intComma } from '@utils/format';

interface MypagePostReviewPageProps extends ChakraProps {}

function MypagePostReviewPage({ ...basisProps }: MypagePostReviewPageProps) {
  return (
    <Box {...basisProps}>
      <Text variant="pageTitle">리뷰작성</Text>
      <Text fontWeight="bold" mb="18px">
        [2021 - 04 - 01]
      </Text>
      <HStack fontSize="12px" justify="space-between">
        <HStack>
          <Image
            boxSize="60px"
            src="/images/orderHistory.png"
            bg="gray.100"
            rounded="5px"
          />
          <Box>
            <Text fontWeight="bold">샴푸 & 바디</Text>
            <Text variant="normal12gray">샴푸 & 바디 | 300ml</Text>
            <Text variant="boldcommerse">{intComma(27000)}원/ 1개</Text>
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
}

export default MypagePostReviewPage;
