import React from 'react';

import { Box, Button, Container, Text } from '@chakra-ui/react';

import ButtonCarousel from './ButtonCarousel';
import SingleCarousel from './SingleCarousel';

import { FloatingActionIcon } from 'generated/icons/FloatingActionIcon';

const Section3 = () => {
  return (
    <Box w="100%" zIndex="4" position="relative">
      <Text fontSize="26px" align="center" mt="80px">
        인코스런을 <strong>직접 사용해본</strong>
        <br />
        고객님의 솔직한 리뷰
      </Text>
      <ButtonCarousel />
      <SingleCarousel />
      <FloatingActionIcon />
    </Box>
  );
};
export default Section3;
