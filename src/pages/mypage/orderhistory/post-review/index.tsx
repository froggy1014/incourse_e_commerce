import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { getCookie } from 'cookies-next';

import { getOrderList } from '@apis/_axios/axiosGet';

import { IItem } from '@components/MypageOrderhistoryPage/OrderHistory';
import MypagePostReviewPage from '@components/MypagePostReviewPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
  req,
}) => {
  const userId = getCookie('userId', { res, req });
  const data = await getOrderList(userId);
  const productIds: number[] = [];
  const count: number[] = [];
  const productInfo = data.results.filter(
    (data: IItem) => data.orderId === query.orderId,
  );
  productInfo.map((product: IItem) => {
    productIds.push(product.productId);
    count.push(product.count);
  });
  const date = productInfo[0].created;
  return {
    props: { productIds, count, date },
  };
};

function MypageOrderhistoryPostReview({
  productIds,
  count,
  date,
}: {
  productIds: number[];
  count: number[];
  date: string;
}) {
  return (
    <>
      <Head>
        <title>리뷰작성 페이지</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={
          <MypagePostReviewPage
            productIds={productIds}
            count={count}
            date={date}
          />
        }
        footer={<Footer />}
      />
    </>
  );
}

export default MypageOrderhistoryPostReview;
