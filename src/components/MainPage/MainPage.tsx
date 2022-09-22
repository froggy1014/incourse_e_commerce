import React from 'react';

import { ChakraProps } from '@chakra-ui/react';

interface MainPageProps extends ChakraProps {}

function MainPage({ ...basisProps }: MainPageProps) {
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

export default MainPage;
