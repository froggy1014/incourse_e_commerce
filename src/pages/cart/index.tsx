import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { getCookie, setCookie } from 'cookies-next';

import CartPage from '@components/CartPage/CartPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

import { refreshTokenFun } from '@utils/axios';

const Cart = () => {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | cart</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<CartPage />}
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
  } else if (
    !accessToken &&
    refreshToken &&
    typeof refreshToken !== 'boolean'
  ) {
    const data = await refreshTokenFun(refreshToken);
    setCookie('access', data.access, { res, req });
    setCookie('refresh', data.refresh, { res, req });
  }
  return {
    props: {},
  };
};
