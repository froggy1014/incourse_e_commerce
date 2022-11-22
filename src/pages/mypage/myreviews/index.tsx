import Head from 'next/head';

import MypageMyreviewsPage from '@components/MypageMyreviewsPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';

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
