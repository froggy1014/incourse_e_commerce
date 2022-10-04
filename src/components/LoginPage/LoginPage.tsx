import { useRouter } from 'next/router';
import React from 'react';

import { Button, Container, Flex } from '@chakra-ui/react';

import SocialButton, { SocialType } from '@components/common/SocialButton';
import { Logo } from '@icons/UI';

import { SOCIAL } from '@constants/social';

const SOCIAL_REDIRECT_URL = `http://127.0.0.1:3000/social_login/callback`;

interface NewTyps {
  social: SocialType;
  link: string;
}

const social: NewTyps = {
  social: 'kakao',
  link: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${SOCIAL.KAKAO_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=kakao`,
};

const LoginPage = () => {
  const router = useRouter();
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

//   const kakaoLogin = async () => {
//     // 카카오 초기화
//     const kakao = kakaoInit();

//     // 카카오 로그인 구현
//     kakao.Auth.login({
//       success: () => {
//         kakao.API.request({
//           url: '/v2/user/me', // 사용자 정보 가져오기
//           success: (res: any) => {
//             // 로그인 성공할 경우 정보 확인 후 /kakao 페이지로 push
//             console.log(res);
//             router.push('/sign-up');
//           },
//           fail: (error: any) => {
//             console.log(error);
//           },
//         });
//       },
//       fail: (error: any) => {
//         console.log(error);
//       },
//     });
//   };
