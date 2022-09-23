import React from 'react';

import { ChakraProps, Container } from '@chakra-ui/react';

import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

import Section1 from './_fragments/Section1';
import Section2 from './_fragments/Section2';
import Section3 from './_fragments/Section3';
import Section4 from './_fragments/Section4';

interface MainPageProps extends ChakraProps {}

function MainPage({ ...basisProps }: MainPageProps) {
  return (
    <>
      <Container maxW="375px" centerContent>
        <MainHeader px="16px" />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Container>
    </>
  );
}

export default MainPage;
