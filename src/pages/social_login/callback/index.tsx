import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { setCookie } from 'cookies-next';

import { Flex, Spinner } from '@chakra-ui/react';

import { postSocialToken } from '@apis/_axios/axiosPost';

import { ROUTES } from '@constants/routes';
import MobileLayout from '@layout/MobileLayout';
import registerIds from '@utils/RegisterIds';

function SocialloginCallback({ code, state }: { code: string; state: string }) {
  const router = useRouter();
  const social = { code: code, state: state };

  useEffect(() => {
    const data = postSocialToken(social);
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
  }, []);

  return (
    <>
      <Head>
        <title>callback</title>
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { code, state } = query;
  return {
    props: { code: code, state: state },
  };
};

export default SocialloginCallback;
