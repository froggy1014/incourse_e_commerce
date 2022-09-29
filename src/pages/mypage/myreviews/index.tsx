import Head from 'next/head';

import MypageMyreviewsPage from '@components/MypageMyreviewsPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

function MypageMyreviews() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | myreviews</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<MypageMyreviewsPage />}
        footer={<Footer />}
      />
    </>
  );
}

export default MypageMyreviews;
