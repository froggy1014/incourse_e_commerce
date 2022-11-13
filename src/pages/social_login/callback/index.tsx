import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { setCookie } from 'cookies-next';

import { Flex, Spinner } from '@chakra-ui/react';

import { getCartInfo, getMe } from '@apis/_axios/axiosGet';
import { postSocialToken } from '@apis/_axios/axiosPost';

import MobileLayout from '@components/common/@Layout/MobileLayout';

function SocialloginCallback({ code, state }: { code: string; state: string }) {
  const router = useRouter();
  const social = { code: code, state: state };

  async function registerIds() {
    const myinfo = getMe();
    Promise.resolve(myinfo).then((data) => {
      const { id } = data;
      setCookie('userId', id);
      const cartInfo = getCartInfo(id);
      Promise.resolve(cartInfo).then((data) => {
        setCookie('cartId', data[0].id);
        router.push('/');
      });
    });
  }

  useEffect(() => {
    const data = postSocialToken(social);
    Promise.resolve(data).then((data) => {
      const { isRegister, access, refresh } = data;
      setCookie('access', access);
      setCookie('refresh', refresh);
      if (isRegister) {
        registerIds();
      } else {
        router.push('/sign-up');
      }
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
