import React from 'react';

import { Box, ChakraProps, Container, Flex, Image } from '@chakra-ui/react';

import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

import Section1 from './_fragments/Section1';
import Section2 from './_fragments/Section2';
import Section3 from './_fragments/Section3';

interface MainPageProps extends ChakraProps {}

function MainPage({ ...basisProps }: MainPageProps) {
  return (
    <>
      <Container maxW="375px">
        <MainHeader px="16px" />
        <Section1 />
        <Section2 />
        <Section3 />
      </Container>
    </>
  );
}

export default MainPage;
