import React from 'react';

import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';

import { ChatIcon, RatingIcon } from '@icons/UI';

const ReviewCard = () => {
  return (
    <>
      <Box w="100%" fontSize="12px" pt="10px">
        <Flex w="100%" justify="space-between">
          <Text fontWeight="bold">incourse.run</Text>
          <HStack spacing="1">
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
          </HStack>
        </Flex>
        <Text color="gray.600">2021.03.29</Text>
      </Box>
      <Text mt="15px" mb="10px">
        순해서 아이피부에도 자극없이 사용할 수 있어요!
      </Text>
      <HStack>
        <Image
          src="/images/ReviewImage.png"
          boxSize="80px"
          alt="reviewImg"
          objectFit="cover"
        />
        <Image
          src="/images/ReviewImage.png"
          boxSize="80px"
          alt="reviewImg"
          objectFit="cover"
        />
        <Image
          src="/images/ReviewImage.png"
          boxSize="80px"
          alt="reviewImg"
          objectFit="cover"
        />
      </HStack>
      <Box>
        <HStack>
          <ChatIcon />
          <Text fontWeight="bold">인코스런 관리자</Text>
        </HStack>
        <Box pl="27px">
          <Text color="gray.600">2021.03.29</Text>
          <Text py="20px">
            감사합니다 고객님! 앞으로 더 노력하는 인코스런이 되겠습니다!
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default ReviewCard;
