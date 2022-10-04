import React from 'react';

import { Container } from '@chakra-ui/react';

import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

import Section1 from './_fragments/Section1';
import Section2 from './_fragments/Section2';
import Section3 from './_fragments/Section3';
import Section4 from './_fragments/Section4';
import { AllReviewTypes } from './data';

function MainPage({ results }: AllReviewTypes) {
  return (
    <>
      <Container maxW="375px" centerContent>
        <MainHeader px="16px" />
        <Section1 />
        <Section2 />
        <Section3 results={results} />
        <Section4 />
      </Container>
    </>
  );
}

export default MainPage;
