import Link from 'next/link';
import React from 'react';

import { Box, Container, Image } from '@chakra-ui/react';

import { SubmitButton } from '@components/common/index';

const Section2 = () => {
  const handleClick = () => {
    console.log('Submit');
  };

  return (
    <Container position="relative" centerContent>
      <Image
        objectFit="cover"
        src="/images/Section2.png"
        alt="page1"
        minW="375px"
        h="auto"
      />
      <Box
        onClick={handleClick}
        position="absolute"
        top="263px"
        left="50%"
        transform="translateX(-50%)"
      >
        <Link href="/product">
          <SubmitButton
            title="상품전체보기"
            variant="btncommerse"
            size="btnmd"
          />
        </Link>
      </Box>
    </Container>
  );
};

export default Section2;
