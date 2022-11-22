import Head from 'next/head';

import MypageWithdrawalPage from '@components/MypageWithdrawalPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';

function MypageWithdrawal() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | withdrawal</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<MypageWithdrawalPage />}
        footer={<Footer />}
      />
    </>
  );
}

export default MypageWithdrawal;
