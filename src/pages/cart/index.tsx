import Head from 'next/head';

import CartPage from '@components/CartPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

function Cart() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | cart</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<CartPage />}
        footer={<Footer />}
      />
    </>
  );
}

export default Cart;
