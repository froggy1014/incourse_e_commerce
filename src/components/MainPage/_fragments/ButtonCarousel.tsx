import Slider from 'react-slick';

import { Box, Button } from '@chakra-ui/react';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function ButtonCarousel() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  };
  return (
    <>
      <Box mt="50px">
        <Slider {...settings}>
          <Box>
            <Button variant="review">전체</Button>
          </Box>
          <Box>
            <Button variant="review" w="63px">
              바스&샴푸
            </Button>
          </Box>
          <Box>
            <Button variant="review">오일</Button>
          </Box>
          <Box>
            <Button variant="review">로션</Button>
          </Box>
          <Box>
            <Button variant="review">크림</Button>
          </Box>
          <Box>
            <Button variant="review" w="83px">
              파우더 로션
            </Button>
          </Box>
        </Slider>
      </Box>
    </>
  );
}

export default ButtonCarousel;
