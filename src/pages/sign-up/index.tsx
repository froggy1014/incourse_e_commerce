import React from 'react';

import SignupPage from '@components/SignupPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import SignupHeader from '@components/common/@Layout/MobileLayout/_fragments/SignupHeader';

const SignUp = () => {
  return <MobileLayout content={<SignupPage />} />;
};

export default SignUp;
