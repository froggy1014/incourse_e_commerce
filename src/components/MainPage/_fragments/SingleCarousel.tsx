import Slider from 'react-slick';

import { Box } from '@chakra-ui/react';

import TestBox from './TestBox';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function SingleCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Box overflowX="hidden" maxW="375px" h="auto" mb="100px">
        <Slider {...settings}>
          <TestBox title="1"></TestBox>
          <TestBox title="2"></TestBox>
          <TestBox title="3"></TestBox>
          <TestBox title="4"></TestBox>
          <TestBox title="5"></TestBox>
        </Slider>
      </Box>
    </>
  );
}

export default SingleCarousel;
