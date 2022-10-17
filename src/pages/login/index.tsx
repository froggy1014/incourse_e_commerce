import React from 'react';

import LoginPage from '@components/LoginPage';

interface socialInfo {
  data: {
    clientId: string;
    redirectURL: string;
  };
}

const Login = ({ data }: socialInfo) => {
  return <LoginPage data={data} />;
};

export async function getStaticProps() {
  const data = {
    clientId: process.env.KAKAO_CLIENT_ID,
    redirectURL: process.env.SOCIAL_REDIRECT_URL,
  };

  return {
    props: {
      data,
    },
  };
}

export default Login;
