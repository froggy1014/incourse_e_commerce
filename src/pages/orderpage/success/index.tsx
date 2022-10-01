import Head from 'next/head';

import CartOrderpageSuccessPage from '@components/CartOrderpageSuccessPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

function CartOrderpageSuccess() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>결제완료</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<CartOrderpageSuccessPage />}
        footer={<Footer />}
      />
    </>
  );
}

export default CartOrderpageSuccess;
