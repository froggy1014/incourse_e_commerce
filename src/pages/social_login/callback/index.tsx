import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { setCookie } from 'cookies-next';

import { Flex, Spinner } from '@chakra-ui/react';

import { getCartInfo, getMe } from '@apis/_axios/axiosGet';
import { postSocialToken } from '@apis/_axios/axiosPost';

import MobileLayout from '@components/common/@Layout/MobileLayout';

import { ROUTES } from '@constants/routes';

interface ICartInfo {
  id: number;
  cartitem: any;
  userId: number;
}

function SocialloginCallback({ code, state }: { code: string; state: string }) {
  const router = useRouter();
  const social = { code: code, state: state };

  async function registerIds() {
    const myinfo = getMe();
    myinfo.then((data) => {
      setCookie('userId', data.id);
      const cartInfo = getCartInfo(data.id);
      registerCartId(cartInfo);
    });
  }

  async function registerCartId(cartInfo: Promise<ICartInfo[]>) {
    cartInfo.then((data: ICartInfo[]) => {
      setCookie('cartId', data[0].id);
      router.replace(ROUTES.MAIN);
    });
  }

  useEffect(() => {
    const data = postSocialToken(social);
    data.then((data) => {
      const { isRegister, access, refresh } = data;
      setCookie('access', access);
      setCookie('refresh', refresh);
      if (isRegister) registerIds();
      if (!isRegister) router.replace(ROUTES.SIGNUP);
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
