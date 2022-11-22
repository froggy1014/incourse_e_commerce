import Head from 'next/head';

import SocialloginPage from '@components/SocialloginPage';

import MobileLayout from '@layout/MobileLayout';

function Sociallogin() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | sociallogin</title>
      </Head>
      <MobileLayout content={<SocialloginPage />} />
    </>
  );
}

export default Sociallogin;
