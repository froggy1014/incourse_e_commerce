import React, { useState } from 'react';

import { getCookie } from 'cookies-next';

import OrderPageView from './CartOrderPage.view';
import useFormValidate from './_hooks/useFormValidate';
import { TossPayment, postOrderId, postOrderStatus } from './_hooks/useQueries';

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
        userId: Number(getCookie('userId')),
        price: prices.total + prices.delivery,
        method: 'CARD',
        userName: username,
        userPhone: phone.split('-').join(''),
        userAddrPost: address.split('-').pop(),
        userAddrDetail: address.split('-').shift() + '' + addressDetail,
        shipName: orderUsername,
        shipPhone: orderPhone.split('-').join(''),
        shipAddrPost: orderAddress.split('-').pop(),
        shipAddrDetail:
          orderAddress.split('-').shift() + '' + orderAddressDetail,
        orderMessage: orderRequest === '' ? '없음' : orderRequest,
      };
      async function apiCall() {
        const response = await postOrderId(data);
        for (let i = 0; i < prices.count.length; i++) {
          const res = await postOrderStatus(
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
