import Head from 'next/head';

import MypageWithdrawalPage from '@components/MypageWithdrawalPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';

function MypageWithdrawal() {
  return (
    <>
      <Head>
        <title>회원탈퇴</title>
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
