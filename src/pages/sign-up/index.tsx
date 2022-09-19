import React from 'react';

import { Box, Container, Flex, Heading } from '@chakra-ui/react';

import Logo from 'generated/icons/Logo';
import { ProfileIcon } from 'generated/icons/ProfileIcon';

const index = () => {
  return (
    <Container w="375px" h="100vh" border="1px black solid">
      <Flex w="215px" h="80px" justify="left" align="center">
        <Logo size="sm" />
      </Flex>
      <Heading as="h3" fontSize="26px">
        회원가입
      </Heading>
      <Box w="343px" h="auto" mt="60px">
        <Heading as="h4" fontSize="md">
          회원정보입력
        </Heading>
        <Flex w="100%" justify="center" mt="40px">
          <ProfileIcon />
        </Flex>
      </Box>
    </Container>
  );
};

export default index;
