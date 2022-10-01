import React, { useState } from 'react';
import Slider from 'react-slick';

import { Box, Button } from '@chakra-ui/react';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function ButtonCarousel({
  value,
  setValue,
}: {
  value: number;
  setValue: (arg: number) => void;
}) {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    console.log(typeof target.value);
    Number(target.value) !== 0 ? setValue(Number(target.value)) : setValue(0);
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    variableWidth: true,
  };
  return (
    <>
      <Box>
        <Slider {...settings}>
          <Box>
            <Button
              value={0}
              variant="review"
              onClick={(e) => handleClick(e)}
              isActive={value === 0}
            >
              전체
            </Button>
          </Box>
          <Box>
            <Button
              value={1111}
              variant="review"
              w="63px"
              onClick={(e) => handleClick(e)}
              isActive={value === 1111}
            >
              {' '}
              바스&샴푸
            </Button>
          </Box>
          <Box>
            <Button
              value={2222}
              variant="review"
              onClick={(e) => handleClick(e)}
              isActive={value === 2222}
            >
              오일
            </Button>
          </Box>
          <Box>
            <Button
              value={3333}
              variant="review"
              onClick={(e) => handleClick(e)}
              isActive={value === 3333}
            >
              로션
            </Button>
          </Box>
          <Box>
            <Button
              value={4444}
              variant="review"
              onClick={(e) => handleClick(e)}
              isActive={value === 4444}
            >
              크림
            </Button>
          </Box>
          <Box>
            <Button
              value={5555}
              variant="review"
              w="83px"
              onClick={(e) => handleClick(e)}
              isActive={value === 5555}
            >
              파우더 로션
            </Button>
          </Box>
        </Slider>
      </Box>
    </>
  );
}

export default ButtonCarousel;
