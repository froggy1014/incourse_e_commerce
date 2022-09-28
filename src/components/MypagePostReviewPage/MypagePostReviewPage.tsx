import React, { useState } from 'react';

import {
  Box,
  ChakraProps,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';

import { AddPhotoIcon, EmptyBigRatingIcon } from '@components/common/@Icons/UI';

import { intComma } from '@utils/format';

interface MypagePostReviewPageProps extends ChakraProps {}

function MypagePostReviewPage({ ...basisProps }: MypagePostReviewPageProps) {
  const [rating, setRating] = useState(0);
  console.log(rating);
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
      <Stack>
        <Text py="10px">별점</Text>
        <Flex justify="center" py="20px">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i;
            return (
              <Box key={i}>
                <EmptyBigRatingIcon
                  checked={ratingValue < rating ? true : false}
                  id={ratingValue}
                  onClick={() => setRating(ratingValue + 1)}
                />
              </Box>
            );
          })}
        </Flex>
      </Stack>
      <Stack>
        <Text>내용</Text>
        <Textarea
          placeholder="내용을 입력하세요."
          resize="none"
          h="200px"
        ></Textarea>
      </Stack>
      <Stack my="20px">
        <Text>사진첨부 (0/3)</Text>
        <Flex py="20px">
          <AddPhotoIcon />
        </Flex>
      </Stack>
    </Box>
  );
}

export default MypagePostReviewPage;
