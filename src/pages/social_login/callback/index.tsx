import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { setCookie } from 'cookies-next';

import { Flex, Spinner } from '@chakra-ui/react';

import { postSocialToken } from '@apis/_axios/post/axiosPost';

import { ROUTES } from '@constants/routes';
import MobileLayout from '@layout/MobileLayout';
import registerIds from '@utils/RegisterIds';

function SocialloginCallback() {
  const router = useRouter();
  const { code, state } = router.query;

  useEffect(() => {
    if (code === undefined) return;
    const data = postSocialToken({ code, state });
    data.then((data) => {
      const { isRegister, access, refresh, socialToken } = data;
      setCookie('socialToken', socialToken);
      if (isRegister) {
        setCookie('access', access);
        setCookie('refresh', refresh);
        registerIds();
      }
      if (!isRegister) router.replace(ROUTES.SIGNUP.MAIN);
    });
  }, [router, code, state]);

  return (
    <>
      <Head>
        <title>Social Login Callback</title>
      </Head>
      <MobileLayout
        content={
          <Flex w="100%" h="100vh" justify="center" align="center">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="commerse.500"
              size="xl"
            />
          </Flex>
        }
      />
    </>
  );
}

export default SocialloginCallback;
