import Head from 'next/head';

import SignUpSuccessPage from '@components/pages/SignUpSuccessPage';

import MobileLayout from '@layout/MobileLayout';

function SignUpSuccess() {
  return (
    <>
      <Head>
        <title>회원가입 성공</title>
      </Head>
      <MobileLayout content={<SignUpSuccessPage />} />
    </>
  );
}

export default SignUpSuccess;
