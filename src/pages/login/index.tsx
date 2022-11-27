import Head from 'next/head';
import React from 'react';

import LoginPage from '@components/pages/LoginPage';

interface socialInfo {
  data: {
    clientId: string;
    redirectURL: string;
  };
}
export async function getStaticProps() {
  const data = {
    clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
    redirectURL: process.env.SOCIAL_REDIRECT_URL,
  };
  return {
    props: {
      data,
    },
  };
}

const Login = ({ data }: socialInfo) => {
  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <LoginPage data={data} />;
    </>
  );
};

export default Login;
