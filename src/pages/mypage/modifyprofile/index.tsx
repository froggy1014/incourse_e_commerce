import Head from 'next/head';

import MypageModifyprofilePage from '@components/MypageModifyprofilePage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';

function MypageModifyprofile() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>modifyprofile</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<MypageModifyprofilePage />}
        footer={<Footer />}
      />
    </>
  );
}

export default MypageModifyprofile;
