import Head from 'next/head';

import ProductPage from '@components/ProductPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';

function Product() {
  return (
    <>
      <Head>
        <title>상품 페이지</title>
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
