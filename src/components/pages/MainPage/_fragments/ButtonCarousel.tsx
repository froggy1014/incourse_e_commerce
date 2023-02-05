import React from 'react';
import Slider from 'react-slick';

import { ReviewTypes } from '@types';

import { Box, Button } from '@chakra-ui/react';

import TagButton from './TagButton';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function ButtonCarousel({
  value,
  setValue,
  data,
}: {
  value: number;
  setValue: (arg: number) => void;
  data: ReviewTypes[];
}) {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    Number(target.value) !== 0 ? setValue(Number(target.value)) : setValue(0);
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          {data.map((tag) => {
            return (
              <TagButton
                key={tag.id}
                id={tag.id}
                name={tag.name}
                value={value}
                handleClick={handleClick}
              />
            );
          })}
        </Slider>
      </Box>
    </>
  );
}

export default ButtonCarousel;
