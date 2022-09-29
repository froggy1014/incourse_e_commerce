import React from 'react';

import { Box, ChakraProps, Divider, Image, Text } from '@chakra-ui/react';

import { MyReviewCard } from '@components/common';

interface MypageMyreviewsPageProps extends ChakraProps {}

const results = [
  {
    id: 1,
    title: 'Evan',
    description: '순해서 아이피부에도 자극없이 사용할 수 있어요!',
    rate: 5,
    imgUrl: [
      '/images/ReviewImage.png',
      '/images/ReviewImage.png',
      '/images/ReviewImage.png',
    ],
    date: '2022-09-11T17:12:52.749378',
  },
  {
    id: 2,
    title: 'Evan',
    description: '순해서 아이피부에도 자극없이 사용할 수 있어요!',
    rate: 4,
    imgUrl: ['/images/ReviewImage.png'],
    date: '2022-09-11T17:12:52.749378',
  },
  {
    id: 3,
    title: 'Evan',
    description: '순해서 아이피부에도 자극없이 사용할 수 있어요!',
    rate: 3,
    imgUrl: [],
    date: '2022-09-11T17:12:52.749378',
  },
  {
    id: 4,
    title: 'Evan',
    description: '순해서 아이피부에도 자극없이 사용할 수 있어요!',
    rate: 1,
    imgUrl: ['/images/ReviewImage.png', '/images/ReviewImage.png'],
    date: '2022-09-11T17:12:52.749378',
  },
];

function MypageMyreviewsPage({ ...basisProps }: MypageMyreviewsPageProps) {
  return (
    <Box {...basisProps}>
      <Text variant="pageTitle">내 상품 리뷰</Text>
      <Text variant="bold16" mb="30px">
        총{' '}
        <Box as="span" color="commerse.500">
          78
        </Box>
        건
      </Text>
      {results.map((result) => {
        const { id, title, description, rate, imgUrl, date } = result;
        return (
          <>
            <MyReviewCard
              key={id}
              title={title}
              description={description}
              rate={rate}
              imgUrl={imgUrl}
              date={date}
            />
            <Divider />
          </>
        );
      })}
    </Box>
  );
}

export default MypageMyreviewsPage;
