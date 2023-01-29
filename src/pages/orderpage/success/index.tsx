import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

import { IOrderedItem, IPatchOrder } from '@types';
import { getCookie } from 'cookies-next';

import { delCartItem } from '@apis/_axios/delete';
import { getCartInfo, getOrderStatus } from '@apis/_axios/get/axiosGet';
import { patchOrder } from '@apis/_axios/patch/axiosPatch';

import CartOrderpageSuccessPage from '@components/pages/CartOrderpageSuccessPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';

export interface IPaidProduct {
  id: number;
  orderId: string;
  productId: number;
  count: number;
  shippingStatus: string;
  created: string;
}

function CartOrderpageSuccess({
  orderedInfo,
  orderedItem,
  cartItemIds,
}: {
  orderedInfo: IPatchOrder;
  orderId: string;
  orderedItem: IOrderedItem[];
  cartItemIds: number[];
}) {
  useEffect(() => {
    if (cartItemIds) {
      cartItemIds.forEach(async (pk: number) => {
        await delCartItem(pk);
      });
    }
  }, [cartItemIds, orderedItem]);
  return (
    <>
      <Head>
        <title>결제완료</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={
          <CartOrderpageSuccessPage
            orderedInfo={orderedInfo}
            orderedItem={orderedItem}
          />
        }
        footer={<Footer />}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
  req,
}) => {
  const userId = getCookie('userId', { res, req });
  const cartItemIds = String(query.items).split(',');
  const {
    userName,
    userPhone,
    userAddrPost,
    userAddrDetail,
    shipName,
    shipPhone,
    shipAddrPost,
    shipAddrDetail,
    orderMessage,
  } = await getOrderStatus(query.orderId as string);
  const body = {
    price: query.amount,
    paymentKey: query.paymentKey,
    method: 'CARD',
    userName,
    userPhone,
    userAddrPost,
    userAddrDetail,
    shipName,
    shipPhone,
    shipAddrPost,
    shipAddrDetail,
    orderMessage,
  };
  const orderedInfo = await patchOrder(query.orderId as string, body);
  const data = await getCartInfo(userId as string);
  const orderedItem = data[0].cartitem.filter((item: IOrderedItem) =>
    cartItemIds.includes(String(item.id)),
  );
  return {
    props: {
      orderedInfo,
      orderedItem,
      cartItemIds,
    },
  };
};

export default CartOrderpageSuccess;
