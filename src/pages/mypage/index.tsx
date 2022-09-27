import Head from 'next/head';

import MypagePage from '@components/MypagePage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

function Mypage() {
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

export default Mypage;
