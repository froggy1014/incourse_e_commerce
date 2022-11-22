import React from 'react';

import SignupPage from '@components/SignupPage';

import MobileLayout from '@layout/MobileLayout';

const SignUp = () => {
  return <MobileLayout content={<SignupPage />} />;
};

export default SignUp;
