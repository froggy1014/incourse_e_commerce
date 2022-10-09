import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { getCookie } from 'cookies-next';

import MypagePage from '@components/MypagePage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

import { axiosInstance } from '@utils/axios';

function Mypage() {
  const [meinfo, setMeinfo] = useState();
  useEffect(() => {
    async function mypageFunc() {
      await axiosInstance('user/me/', {
        headers: { Authorization: `Bearer ${getCookie('access')}` },
      }).then((res) => {
        setMeinfo(res.data);
      });
    }
    mypageFunc();
  }, []);
  return (
    <>
      <Head>
        <title>mypage</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<MypagePage UserInfo={meinfo} />}
        footer={<Footer />}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const refresh = getCookie('refresh', { req, res });
  if (refresh === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default Mypage;
