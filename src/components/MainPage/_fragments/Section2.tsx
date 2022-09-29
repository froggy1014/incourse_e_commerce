import { useRouter } from 'next/router';
import React from 'react';

import { Box, Container, Image } from '@chakra-ui/react';

import { SubmitButton } from '@components/common/index';

import { ROUTES } from '@constants/routes';

const Section2 = () => {
  const router = useRouter();
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
        <SubmitButton
          title="상품전체보기"
          variant="btncommerse"
          sizes="btnmd"
          onClick={() => router.push(ROUTES.PRODUCT)}
        />
      </Box>
    </Container>
  );
};

export default Section2;
