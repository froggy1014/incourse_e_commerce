import React from 'react';

import { Box, Flex, Heading } from '@chakra-ui/react';

import { ProfileIcon } from '@icons/UI';

import ProfileForm from './_fragments/ProfileForm';

const SignupPage = () => {
  return (
    <>
      <Heading as="h3" fontSize="26px" width="100%">
        회원가입
      </Heading>
      <Box w="343px" h="auto" mt="60px">
        <Heading as="h4" fontSize="md">
          회원정보입력
        </Heading>
        <Flex w="100%" justify="center" mt="40px">
          <ProfileIcon />
        </Flex>
        <ProfileForm />
      </Box>
    </>
  );
};

export default SignupPage;
