import Head from 'next/head';

import CartOrderPage from '@components/CartOrderPagePage/CartOrderPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

function CartOrder() {
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

export default CartOrder;
