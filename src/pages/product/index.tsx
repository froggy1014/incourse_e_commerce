import Head from 'next/head';

import ProductPage from '@components/ProductPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';

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
