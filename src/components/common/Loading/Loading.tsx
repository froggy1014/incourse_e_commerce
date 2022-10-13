/* eslint-disable no-use-before-define */
import React from 'react';

import { Flex, Spinner, SpinnerProps } from '@chakra-ui/react';

export const Loading = ({ ...props }: SpinnerProps) => {
  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="commerse.500"
        size="xl"
        {...props}
      />
    </Flex>
  );
};
