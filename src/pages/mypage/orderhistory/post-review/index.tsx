import Head from 'next/head';

import MypagePostReviewPage from '@components/MypagePostReviewPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

function MypageOrderhistoryPostReview() {
  return (
    <>
      <Head>
        <title>리뷰작성 페이지</title>
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
