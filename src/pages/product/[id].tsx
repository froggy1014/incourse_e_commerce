import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import ProductDetailByIdPage from '@components/ProductDetailByIdPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

import { productFetch } from '@utils/axios';

function ProductDetailById({
  productDetail,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>상세 페이지</title>
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
