import React from 'react';

import { Container, Flex } from '@chakra-ui/react';

import SocialButton, { SocialType } from '@components/common/SocialButton';
import { Logo } from '@icons/UI';

import { SOCIAL } from '@constants/social';

// const SOCIAL_REDIRECT_URL = process.env.SOCIAL_REDIRECT_URL;
// const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;

const SOCIAL_REDIRECT_URL = 'http://localhost:3000/social_login/callback';

interface NewTyps {
  social: SocialType;
  link: string;
}

const social: NewTyps = {
  social: 'kakao',
  link: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${SOCIAL.KAKAO_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=kakao`,
};
const LoginPage = () => {
  return (
    <Container
      w="375px"
      bg="#FF710B"
      h="100vh"
      position="relative"
      centerContent
    >
      <Flex
        justify="space-between"
        align="center"
        w="310px"
        h="52%"
        direction="column"
        mb="50px"
        position="absolute"
        bottom="0"
      >
        <Logo size="lg" />
        <SocialButton key={social.social} data={social} size={'md'} />
      </Flex>
    </Container>
  );
};

export default LoginPage;
