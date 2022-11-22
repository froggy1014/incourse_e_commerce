import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import ProductPage from '@components/ProductPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';
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
  const res = await productFetch('/product/?page_size=4');
  const data = await res.data;
  return {
    props: {
      data,
    },
  };
};

export default Product;
