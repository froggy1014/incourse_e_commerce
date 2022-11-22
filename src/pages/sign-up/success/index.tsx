import SignUpSuccessPage from '@components/SignUpSuccessPage';

import MobileLayout from '@layout/MobileLayout';

function SignUpSuccess() {
  return (
    <>
      <MobileLayout content={<SignUpSuccessPage />} />
    </>
  );
}

export default SignUpSuccess;
