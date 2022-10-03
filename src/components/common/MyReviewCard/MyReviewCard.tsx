import React from 'react';

import { Box, BoxProps, Flex, HStack, Image, Text } from '@chakra-ui/react';

import { formatDate } from '@utils/format';

import { EmptyRatingIcon, RatingIcon } from '../@Icons/UI';

interface SummaryCardProps extends Omit<BoxProps, 'title'> {
  title: string | JSX.Element;
  description: string | JSX.Element;
  rate: number;
  date: string;
  imgUrl?: string[];
}

export const MyReviewCard = ({
  title,
  description,
  rate,
  date,
  imgUrl,
  ...basisProps
}: SummaryCardProps) => {
  const rateArr = Array(5).fill(0);
  return (
    <Box py="25px" {...basisProps}>
      <Box w="100%" fontSize="12px">
        <Flex w="100%" justify="space-between">
          <Text fontWeight="bold">{title}</Text>
          <HStack spacing="1">
            {rateArr.map((arr, i) => {
              if (i <= rate - 1) return <RatingIcon key={i} />;
              else return <EmptyRatingIcon key={i} />;
            })}
          </HStack>
        </Flex>
        <Text color="gray.600">{formatDate(date)}</Text>
      </Box>
      <Text mt="15px" mb="10px">
        {description}
      </Text>
      <HStack>
        {imgUrl?.map((url, i) => {
          return (
            <Image
              key={i}
              src={url}
              boxSize="80px"
              alt="reviewImg"
              objectFit="cover"
            />
          );
        })}
      </HStack>
    </Box>
  );
};

const Basis = Box;
