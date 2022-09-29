import Head from 'next/head';

import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

function CartOrderPage() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | orderPage</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<CartOrderPage />}
        footer={<Footer />}
      />
    </>
  );
}

export default CartOrderPage;
