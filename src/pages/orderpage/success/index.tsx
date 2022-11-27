import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

import axios from 'axios';
import { getCookie } from 'cookies-next';

import CartOrderpageSuccessPage from '@components/pages/CartOrderpageSuccessPage';

import MobileLayout from '@layout/MobileLayout';
import { Footer, MainHeader } from '@layout/components';

axios.defaults.baseURL = 'https://api.commerce.incourse.run/v1/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export interface IPaidProduct {
  id: number;
  orderId: string;
  productId: number;
  count: number;
  shippingStatus: string;
  created: string;
}

export interface IUserInfo {
  [key: string]: string | number;
}

function CartOrderpageSuccess({
  userInfo,
  orderedProduct,
  cartItemIds,
}: {
  userInfo: IUserInfo;
  orderedProduct: IPaidProduct[];
  cartItemIds: string[];
}) {
  useEffect(() => {
    cartItemIds.map((item) => {
      try {
        axios.delete(`cart/item/${item}/`).then((res) => console.log(res));
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>결제완료</title>
      </Head>
      <MobileLayout
        header={<MainHeader />}
        content={
          <CartOrderpageSuccessPage
            userInfo={userInfo}
            orderedProduct={orderedProduct}
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
  async function APICall() {
    const cartItemIds = String(query.items).split(',');
    const response = await axios(`order/${query.orderId}/
    `).then((res) => res.data);
    const body = {
      price: query.amount,
      paymentKey: query.paymentKey,
      method: 'CARD',
      userName: response.userName,
      userPhone: response.userPhone,
      userAddrPost: response.userAddrPost,
      userAddrDetail: response.userAddrDetail,
      shipName: response.shipName,
      shipPhone: response.shipPhone,
      shipAddrPost: response.shipAddPost,
      shipAddrDetail: response.shipAddrDetail,
      orderMessage: response.orderMessage,
    };
    const resp = await axios
      .patch(`order/${query.orderId}/`, body)
      .then((res) => res.data);
    const datas = await axios(
      `order/status/?user_id=${userId}
      `,
    ).then((res) => res.data.results);
    const orderedProduct = datas.filter(
      (data: any) => data.orderId === resp.id,
    );
    return { userInfo: resp, orderedProduct, cartItemIds };
  }
  const data = await APICall();
  return {
    props: data,
  };
};

export default CartOrderpageSuccess;
