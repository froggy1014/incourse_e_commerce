import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

import ProductDetailByIdPage from '@components/ProductDetailByIdPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

function ProductDetailById() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>상세 페이지</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<ProductDetailByIdPage id={Number(id)} />}
        footer={<Footer />}
      />
    </>
  );
}

export default ProductDetailById;
