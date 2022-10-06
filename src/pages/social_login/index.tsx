import Head from 'next/head';

import SocialloginPage from '@components/SocialloginPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

function Sociallogin() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | sociallogin</title>
      </Head>
      <HomeLayout content={<SocialloginPage />} />
    </>
  );
}

export default Sociallogin;
