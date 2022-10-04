import React from 'react';

import {
  Box,
  ChakraProps,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';

import { EmptyRatingIcon, RatingIcon } from '@components/common/@Icons/UI';

import { formatDate } from '@utils/format';

import { ReviewTypes } from '../data';

interface ReviewCardType extends ChakraProps {}

const ReviewCard = ({
  data,
  ...Props
}: {
  data: ReviewTypes;
  Props?: ReviewCardType;
}) => {
  const { created, rate, content, reviewimageSet } = data;
  return (
    <Box
      w="95%"
      rounded="20px"
      boxShadow="1px 2px 10px 1px #1A1A1A1A"
      m="10px"
      p="20px"
      bg="white"
      h="100%"
    >
      <Box w="100%" fontSize="12px" pt="10px">
        <Flex w="100%" justify="space-between">
          <Text fontWeight="bold">incourse.run</Text>
          <HStack spacing="1">
            {Array(5)
              .fill(0)
              .map((dummy, i) => {
                return i <= rate ? (
                  <RatingIcon key={i} />
                ) : (
                  <EmptyRatingIcon key={i} />
                );
              })}
          </HStack>
        </Flex>
        <Text color="gray.600">{formatDate(created)}</Text>
      </Box>
      <Text my="30px">{content}</Text>
      <Divider my="20px" />
      <HStack>
        {reviewimageSet.length &&
          reviewimageSet.map((review, i) => {
            return (
              <Image boxSize="80px" key={i} src={review.url} alt="detail" />
            );
          })}
      </HStack>
    </Box>
  );
};

export default ReviewCard;
