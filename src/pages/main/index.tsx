import Head from 'next/head';

import MainPage from '@components/MainPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

function Main() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | main</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<MainPage />}
        footer={<Footer />}
      />
    </>
  );
}

export default Main;
