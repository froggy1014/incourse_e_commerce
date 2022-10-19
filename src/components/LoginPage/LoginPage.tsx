import React from 'react';

import { Container, Flex } from '@chakra-ui/react';

import SocialButton, { SocialType } from '@components/common/SocialButton';
import { Logo } from '@icons/UI';

interface socialInfo {
  data: {
    clientId: string;
    redirectURL: string;
  };
}

const LoginPage = ({ data }: socialInfo) => {
  const { clientId: KAKAO_CLIENT_ID, redirectURL: SOCIAL_REDIRECT_URL } = data;
  interface NewTyps {
    social: SocialType;
    link: string;
  }
  const social: NewTyps = {
    social: 'kakao',
    link: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=kakao`,
  };
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
