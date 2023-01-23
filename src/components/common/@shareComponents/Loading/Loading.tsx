/* eslint-disable no-use-before-define */
import React from 'react';

import { Flex, Spinner, SpinnerProps } from '@chakra-ui/react';

interface LoadingTypes extends SpinnerProps {
  full?: boolean;
}

export const Loading = (props: LoadingTypes) => {
  return (
    <Flex
      w="100%"
      h={props?.full ? '100vh' : 'auto'}
      justify="center"
      align="center"
      marginY={10}
    >
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
