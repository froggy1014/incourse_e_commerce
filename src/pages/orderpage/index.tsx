import { GetServerSideProps } from 'next';
import Head from 'next/head';

import CartOrderPage from '@components/CartOrderPagePage/CartOrderPage';
import MobileLayout from '@components/common/@Layout/MobileLayout';
import Footer from '@components/common/@Layout/MobileLayout/_fragments/Footer';
import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

function CartOrder({
  TOSS_KEY,
  payingItems,
}: {
  TOSS_KEY: string;
  payingItems: string[];
}) {
  return (
    <>
      <Head>
        <title>orderPage</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={
          <CartOrderPage TOSS_KEY={TOSS_KEY} payingItems={payingItems} />
        }
        footer={<Footer />}
      />
    </>
  );
}

export default CartOrder;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const payingItems = String(query.items).split(',');
  const TOSS_KEY = process.env.TOSS_CLIENT_KEY;
  return {
    props: { TOSS_KEY, payingItems },
  };
};
