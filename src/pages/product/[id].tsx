import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import ProductDetailByIdPage from '@components/pages/ProductDetailByIdPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';
import { productFetch } from '@utils/axios';

function ProductDetailById({
  productDetail,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>제품 상세 페이지</title>
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
    const res = await productFetch(`/product/${id}/`);
    const data = await res.data;
    return {
      props: {
        productDetail: data,
      },
    };
  } catch (err) {
    return { props: {} };
  }
};

export default ProductDetailById;
