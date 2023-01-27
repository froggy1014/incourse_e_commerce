import { GetServerSideProps } from 'next';
import Head from 'next/head';

import CartOrderPage from '@components/pages/CartOrderPagePage/CartOrderPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';

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
  const id = query.items;
  if (id === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
  const payingItems = String(id).split(',');
  const TOSS_KEY = process.env.TOSS_CLIENT_KEY;
  return {
    props: { TOSS_KEY, payingItems },
  };
};
