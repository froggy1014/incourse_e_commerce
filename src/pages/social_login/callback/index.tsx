import Head from 'next/head';

import SocialloginCallbackPage from '@components/SocialloginCallbackPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

function SocialloginCallback() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | callback</title>
      </Head>
      <HomeLayout content={<SocialloginCallbackPage />} />
    </>
  );
}

export default SocialloginCallback;
