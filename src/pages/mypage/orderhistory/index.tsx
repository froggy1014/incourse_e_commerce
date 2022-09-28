import Head from 'next/head';

import MypageOrderhistoryPage from '@components/MypageOrderhistoryPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

function MypageOrderhistory() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | orderhistory</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<MypageOrderhistoryPage />}
        footer={<Footer />}
      />
    </>
  );
}

export default MypageOrderhistory;
