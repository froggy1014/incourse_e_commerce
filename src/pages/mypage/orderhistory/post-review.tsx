import Head from 'next/head';

import MypagePostReviewPage from '@components/pages/MypagePostReviewPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';

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
