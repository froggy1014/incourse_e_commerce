import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { getCookie, setCookie } from 'cookies-next';

import { postRefreshToken } from '@apis/_axios/post/axiosPost';

import CartPage from '@components/pages/CartPage/CartPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';

const Cart = ({ userId }: { userId: string }) => {
  return (
    <>
      <Head>
        <title>장바구니</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<CartPage userId={userId} />}
        footer={<Footer />}
      />
    </>
  );
};

export default Cart;

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  const accessToken = getCookie('access', { res, req });
  const refreshToken = getCookie('refresh', { res, req });
  if (!(accessToken || refreshToken)) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  } else if (!accessToken && !!refreshToken) {
    const data = await postRefreshToken(refreshToken as string);
    setCookie('access', data.access, { res, req });
    setCookie('refresh', data.refresh, { res, req });
  }

  const userId = getCookie('userId', { res, req });
  console.log(userId);
  return {
    props: { userId },
  };
};
