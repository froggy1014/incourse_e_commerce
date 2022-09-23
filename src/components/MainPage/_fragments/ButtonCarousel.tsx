import Slider from 'react-slick';

import { Box, Button } from '@chakra-ui/react';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function ButtonCarousel() {
  const settings = {
    className: 'center',
    centerPadding: '20px',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    variableWidth: true,
    arrows: false,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      );
    },
  };
  return (
    <>
      <Box>
        <Slider {...settings}>
          <Box mb="26px">
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
