import SignUpSuccessPage from '@components/SignUpSuccessPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';

function SignUpSuccess() {
  return (
    <>
      <MobileLayout content={<SignUpSuccessPage />} />
    </>
  );
}

export default SignUpSuccess;
