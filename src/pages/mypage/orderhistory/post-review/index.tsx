import Head from 'next/head';

import MypagePostReviewPage from '@components/MypagePostReviewPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

function MypageOrderhistoryPostReview() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | post-review</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<MypagePostReviewPage />}
        footer={<Footer />}
      />
    </>
  );
}

export default MypageOrderhistoryPostReview;
