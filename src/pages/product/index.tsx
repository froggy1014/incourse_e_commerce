import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import ProductPage from '@components/ProductPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

import { productFetch } from '@utils/axios';

function Product({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { results } = data;
  return (
    <>
      <Head>
        <title>똑똑한 개발자 | product</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<ProductPage data={results} />}
        footer={<Footer />}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await productFetch('');
  const data = await res.data;
  return {
    props: {
      data,
    },
  };
};

export default Product;
