import Slider from 'react-slick';

import { Container } from '@chakra-ui/react';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function SingleCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Container overflowX="hidden" maxW="375px" h="auto">
        <Slider {...settings}>
          <div>거창한 내용</div>
          <div>대단한 내용</div>
          <div>멋있는 내용</div>
          <div>예쁜 내용</div>
          <div>무언가 엄청난 내용</div>
        </Slider>
      </Container>
    </>
  );
}

export default SingleCarousel;
