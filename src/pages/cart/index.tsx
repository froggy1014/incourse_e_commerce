import Head from 'next/head';
import { useEffect, useState } from 'react';

import { getMe } from '@apis/_axios/get/axiosGet';

import { Loading } from '@components/common/@shareComponents';
import CartPage from '@components/pages/CartPage/CartPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';

const Cart = () => {
  const [userId, setUserId] = useState<string>();
  useEffect(() => {
    async function mypageFunc() {
      const data = await getMe();
      setUserId(data.id);
    }
    mypageFunc();
  }, []);
  if (!userId) return <Loading full />;

  return (
    <>
      <Head>
        <title>장바구니</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={<CartPage userId={userId} />}
        footer={<Footer />}
      />
    </>
  );
};

export default Cart;
