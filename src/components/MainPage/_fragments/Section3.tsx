import React, { useState } from 'react';
import Slider from 'react-slick';

import { Box, Text } from '@chakra-ui/react';

import { FloatingActionIcon } from '@icons/UI';

import { AllReviewTypes } from '../data';
import ButtonCarousel from './ButtonCarousel';
import ReviewCard from './ReviewCard';

const Section3 = ({ results }: AllReviewTypes) => {
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
