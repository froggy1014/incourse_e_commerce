import { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/head';

import { getCookie } from 'cookies-next';

import MypagePage from '@components/MypagePage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

import { myInfoFetch } from '@utils/axios';

function Mypage() {
  myInfoFetch('user/me/', {
    headers: {
      Authorization: `Bearer ${getCookie('access')}`,
    },
  }).then((response) => console.log(response));
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>mypage</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<MypagePage />}
        footer={<Footer />}
      />
    </>
  );
}

// export const getServerSideProps = async () => {
//   try {
//     myInfoFetch('user/me').then((response) => console.log(response));
//   } catch (error) {
//     console.log(error);
//   }

//   return {
//     props: {},
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   try {
//   } catch (error) {
//     console.log(error);
//   }

//   return {
//     props: {},
//   };
// };

export default Mypage;
