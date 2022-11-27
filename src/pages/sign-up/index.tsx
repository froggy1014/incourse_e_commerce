import Head from 'next/head';
import React from 'react';

import SignupPage from '@components/SignupPage';

import MobileLayout from '@layout/MobileLayout';

const SignUp = () => {
  return (
    <>
      <Head>
        <title>회원가입</title>
      </Head>
      <MobileLayout content={<SignupPage />} />;
    </>
  );
};

export default SignUp;
