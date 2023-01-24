import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import axios from 'axios';

import ProductDetailByIdPage from '@components/pages/ProductDetailByIdPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';

function ProductDetailById({
  productDetail,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>{productDetail.name} 상세 페이지</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<ProductDetailByIdPage props={productDetail} />}
        footer={<Footer />}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.query;
    const response = await axios(`http://54.249.65.116/v1/product/${id}/`);
    return {
      props: {
        productDetail: response.data,
      },
    };
  } catch (err) {
    return { props: {} };
  }
};

export default ProductDetailById;
