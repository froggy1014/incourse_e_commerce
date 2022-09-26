import React from 'react';

import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';

import { ChatIcon } from 'generated/icons/ChatIcon';
import { RatingIcon } from 'generated/icons/RatingIcon';

const reviews = {
  count: 5,
  next: 'http://api.example.org/accounts/?page=4',
  previous: 'http://api.example.org/accounts/?page=2',
  results: [
    {
      id: 1,
      userId: 'kelly',
      productId: 1,
      rate: 5,
      content: 'string',
      reviewimageSet: [
        {
          reviewId: 1,
          url: '/images/ReviewImage.png',
        },
      ],
    },
    {
      id: 2,
      userId: 'ovan',
      productId: 2,
      rate: 4,
      content: 'string',
      reviewimageSet: [
        {
          reviewId: 2,
          url: '/images/ReviewImage.png',
        },
      ],
    },
    {
      id: 3,
      userId: 'micheal',
      productId: 3,
      rate: 3,
      content: 'string',
      reviewimageSet: [
        {
          reviewId: 3,
          url: '/images/ReviewImage.png',
        },
      ],
    },
    {
      id: 4,
      userId: 'john',
      productId: 4,
      rate: 2,
      content: 'string',
      reviewimageSet: [
        {
          reviewId: 4,
          url: '/images/ReviewImage.png',
        },
      ],
    },
    {
      id: 5,
      userId: 'evan',
      productId: 5,
      rate: 1,
      content: 'string',
      reviewimageSet: [
        {
          reviewId: 5,
          url: '/images/ReviewImage.png',
        },
      ],
    },
  ],
};

const DetailSection3 = () => {
  return (
    <>
      <Flex direction="column" w="100%" my="23px">
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
      </Flex>
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

export default DetailSection3;
