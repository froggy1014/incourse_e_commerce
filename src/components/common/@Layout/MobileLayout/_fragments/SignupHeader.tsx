import React from 'react';

import { Flex } from '@chakra-ui/react';

import Logo from 'generated/icons/Logo';

const SignupHeader = () => {
  return (
    <Flex w="100%" h="80px" justify="left" align="center">
      <Logo size="sm" />
    </Flex>
  );
};

export default SignupHeader;
