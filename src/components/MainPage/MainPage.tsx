import React from 'react';

import {
  Box,
  Button,
  ChakraProps,
  Flex,
  Image,
  Img,
  Text,
} from '@chakra-ui/react';

interface MainPageProps extends ChakraProps {}

function MainPage({ ...basisProps }: MainPageProps) {
  return <h1>Content</h1>;
}

export default MainPage;
