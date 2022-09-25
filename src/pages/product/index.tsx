import Head from 'next/head';

import ProductPage from '@components/ProductPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

function Product() {
  return (
    <>
      <Head>
        <title>똑똑한 개발자 | product</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<ProductPage />}
        footer={<Footer />}
      />
    </>
  );
}

export default Product;
