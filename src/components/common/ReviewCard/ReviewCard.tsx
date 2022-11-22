import React from 'react';

import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';

import { EmptyRatingIcon, RatingIcon } from '@icons/index';

import { formatDate } from '@utils/format';

interface reviewListTypes {
  review: {
    content: string;
    created: string;
    id: number;
    nickname: string;
    rate: number;
    reviewimageSet: any;
    userId: number;
  };
}

export const ReviewCard = ({ review }: reviewListTypes) => {
  const { content, created, id, nickname, rate, reviewimageSet, userId } =
    review;
  return (
    <>
      <Box mb="30px">
        <Box w="100%" fontSize="12px" pt="10px">
          <Flex w="100%" justify="space-between">
            <Text fontWeight="bold">{nickname}</Text>
            <HStack spacing="1">
              {Array(5)
                .fill(0)
                .map((arr, i) => {
                  if (i < rate) return <RatingIcon key={i} />;
                  else return <EmptyRatingIcon key={i} />;
                })}
            </HStack>
          </Flex>
          <Text color="gray.600">{formatDate(created)}</Text>
        </Box>
        <Text mt="15px" mb="10px">
          {content}
        </Text>
        <HStack>
          {reviewimageSet.map(
            ({ reviewId, url }: { reviewId: number; url: string }) => {
              return (
                <Image
                  key={url}
                  src={url}
                  boxSize="80px"
                  alt="reviewImg"
                  objectFit="cover"
                />
              );
            },
          )}
        </HStack>
      </Box>
      {/* <Box>
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
      </Box> */}
    </>
  );
};
