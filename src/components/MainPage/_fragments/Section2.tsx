import React from 'react';

import { Box, Image } from '@chakra-ui/react';

import SubmitButton from '@components/common/SubmitButton/SubmitButton';

const Section2 = () => {
  const handleClick = () => {
    console.log('Submit');
  };

  return (
    <Box position="relative">
      <Image
        objectFit="cover"
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F7lF2s%2FbtrMOplutpC%2FWeoKXTipKiRvhNfu30SiK0%2Fimg.png"
        alt="page1"
        minW="375px"
        h="auto"
      />
      <Box
        onClick={handleClick}
        position="absolute"
        top="170px"
        left="50%"
        transform="translateX(-50%)"
      >
        <SubmitButton title="상품전체보기" w="190px" />
      </Box>
    </Box>
  );
};

export default Section2;
