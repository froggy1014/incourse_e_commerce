import Head from 'next/head';

import MypageModifyprofilePage from '@components/MypageModifyprofilePage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';

function MypageModifyprofile() {
  return (
    <>
      <Head>
        <title>회원정보수정</title>
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
