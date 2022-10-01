import React, { useState } from 'react';
import Slider from 'react-slick';

import { Box, Text } from '@chakra-ui/react';

import { FloatingActionIcon } from '@icons/UI';

import ButtonCarousel from './ButtonCarousel';
// import SingleCarousel from './SingleCarousel';
import ReviewCard from './ReviewCard';

const results = [
  {
    id: 19786754631,
    userId: 9876543,
    productId: 5555,
    rate: 5,
    content: '파우더로션',
    reviewimageSet: [
      {
        reviewId: 1231,
        url: '/images/ReviewImage.png',
      },
    ],
  },
  {
    id: 2135161,
    userId: 23456789,
    productId: 1111,
    rate: 3,
    content: '샴푸',
    reviewimageSet: [
      {
        reviewId: 1232,
        url: '/images/ReviewImage.png',
      },
    ],
  },
  {
    id: 2135161,
    userId: 23456789,
    productId: 4444,
    rate: 1,
    content: '크림',
    reviewimageSet: [
      {
        reviewId: 1232,
        url: '/images/ReviewImage.png',
      },
    ],
  },
  {
    id: 2135161,
    userId: 23456789,
    productId: 2222,
    rate: 3,
    content: '오일',
    reviewimageSet: [
      {
        reviewId: 1232,
        url: '/images/ReviewImage.png',
      },
    ],
  },
  {
    id: 2135161,
    userId: 23456789,
    productId: 3333,
    rate: 2,
    content: '로션',
    reviewimageSet: [
      {
        reviewId: 1232,
        url: '/images/ReviewImage.png',
      },
    ],
  },
];

const Section3 = () => {
  const [value, setValue] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box w="100%" zIndex="4" position="relative">
      <Text fontSize="26px" align="center" mt="80px">
        인코스런을 <strong>직접 사용해본</strong>
        <br />
        고객님의 솔직한 리뷰
      </Text>
      <ButtonCarousel setValue={setValue} value={value} />
      {/* <SingleCarousel /> */}
      <Box overflowX="hidden" maxW="375px" h="auto" mb="100px">
        <Slider {...settings}>
          {value !== 0
            ? results
                .filter((result) => result.productId === value)
                .map((result) => {
                  return <ReviewCard key={result.id} data={result} />;
                })
            : results.map((result) => {
                return <ReviewCard key={result.id} data={result} />;
              })}
        </Slider>
      </Box>
      <FloatingActionIcon />
    </Box>
  );
};
export default Section3;
