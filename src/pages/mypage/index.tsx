import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import MypagePage from '@components/MypagePage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

import { myInfoFetch } from '@utils/axios';
import { cookieStringToObject } from '@utils/token';

function Mypage({
  profile,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(profile);
  return (
    <>
      <Head>
        <title>mypage</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<MypagePage profile={profile} />}
        footer={<Footer />}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.headers.cookie;
  const access = cookieStringToObject(cookies);
  try {
    const profile = await myInfoFetch('user/me/', {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }).then((res) => res.data);
    return {
      props: { profile },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {},
    };
  }
};

export default Mypage;
