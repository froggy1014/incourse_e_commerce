import Head from 'next/head';

import MypageModifyprofilePage from '@components/MypageModifyprofilePage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

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
