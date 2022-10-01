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

type ReviewType = { reviewId: number; url: string };

interface DataType {
  data: {
    id: number;
    userId: number;
    productId: number;
    rate: number;
    content: string;
    reviewimageSet: ReviewType[];
  };
}

interface ReviewCardType extends ChakraProps {}
interface ReviewCardType extends DataType {}

const ReviewCard = ({ data, ...basisProps }: ReviewCardType) => {
  const { id, userId, productId, rate, content, reviewimageSet } = data;
  return (
    <>
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
        <Text color="gray.600">2021.03.29</Text>
      </Box>
      <Text>{content}</Text>
      <Divider my="20px" />
      <HStack>
        {reviewimageSet.length &&
          reviewimageSet.map((review) => {
            return (
              <Image key={review.reviewId} src={review.url} alt="detail" />
            );
          })}
      </HStack>
    </>
  );
};

export default ReviewCard;
