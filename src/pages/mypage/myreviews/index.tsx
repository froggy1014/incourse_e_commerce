import Head from 'next/head';

import MypageMyreviewsPage from '@components/pages/MypageMyreviewsPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';

function MypageMyreviews() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>내 상품 리뷰</title>
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
