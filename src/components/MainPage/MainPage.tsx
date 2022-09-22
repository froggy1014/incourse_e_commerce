import React from 'react';

import { Box, ChakraProps, Flex, Image } from '@chakra-ui/react';

import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

import Section1 from './_fragments/Section1';
import Section2 from './_fragments/Section2';

interface MainPageProps extends ChakraProps {}

function MainPage({ ...basisProps }: MainPageProps) {
  return (
    <>
      <Flex direction="column">
        <MainHeader px="16px" />
        <Section1 />
        <Section2 />
      </Flex>
    </>
  );
}

export default MainPage;
