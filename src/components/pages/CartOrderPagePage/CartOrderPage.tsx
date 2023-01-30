import React, { useState } from 'react';

import { getCookie } from 'cookies-next';

import { postOrderId, postOrderStatus } from '@apis/_axios/post/axiosPost';

import OrderPageView from './CartOrderPage.view';
import useFormValidate from './_hooks/useFormValidate';
import { TossPayment } from './_hooks/useQueries';

interface priceType {
  total: number;
  delivery: number;
  productId: number[];
  count: number[];
}

const OrderPage = ({
  TOSS_KEY,
  payingItems,
}: {
  TOSS_KEY: string;
  payingItems: string[];
}) => {
  const userId = getCookie('userId');
  const [prices, setPrices] = useState<priceType>({
    total: 0,
    delivery: 0,
    productId: [],
    count: [],
  });
  const [products, setProducts] = useState<any[]>([]);
  const formData = useFormValidate();
  const { handleSubmit } = formData;

  const onSubmit = handleSubmit(
    ({
      username,
      phone,
      address,
      addressDetail,
      orderUsername,
      orderPhone,
      orderAddress,
      orderAddressDetail,
      orderRequest,
    }) => {
      const data = {
        userId: String(userId),
        price: prices.total,
        amount: prices.total + prices.delivery,
        method: 'CARD',
        userName: username,
        userPhone: phone.split('-').join(''),
        userAddrPost: address.split('-').pop(),
        userAddr: address.split('-').shift(),
        userAddrDetail: addressDetail,
        shipName: orderUsername,
        shipPhone: orderPhone.split('-').join(''),
        shippingPrice: prices.delivery,
        shipAddrPost: orderAddress.split('-').pop(),
        shipAddr: orderAddress.split('-').shift(),
        shipAddrDetail: orderAddressDetail,
        orderMessage: orderRequest === '' ? '없음' : orderRequest,
      };
      async function apiCall() {
        const response = await postOrderId(data);
        for (let i = 0; i < prices.count.length; i++) {
          await postOrderStatus(
            response.id,
            prices.productId[i],
            prices.count[i],
          );
        }
        TossPayment(
          response.id,
          prices.total,
          prices.delivery,
          data.userName,
          TOSS_KEY,
          payingItems,
        );
      }
      apiCall();
    },
  );
  return (
    <OrderPageView
      formData={formData}
      onSubmit={onSubmit}
      prices={prices}
      setPrices={setPrices}
      products={products}
      setProducts={setProducts}
    />
  );
};

export default OrderPage;
