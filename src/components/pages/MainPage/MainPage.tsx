import React from 'react';

import { AllReviewTypes } from '@types';

import { Container } from '@chakra-ui/react';

import { MainHeader } from '@layout/components';

import Section1 from './_fragments/Section1';
import Section2 from './_fragments/Section2';
import Section3 from './_fragments/Section3';
import Section4 from './_fragments/Section4';

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
