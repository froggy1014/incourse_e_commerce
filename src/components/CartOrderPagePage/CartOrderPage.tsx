import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { getCookie, setCookies } from 'cookies-next';
import { v4 as uuidv4 } from 'uuid';

import { loadTossPayments } from '@tosspayments/payment-sdk';

import OrderPageView from './CartOrderPage.view';
import useFormValidate from './_hooks/useFormValidate';

const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq';

const OrderPage = () => {
  const router = useRouter();
  const [prices, setPrices] = useState({
    total: 0,
    delivery: 0,
  });
  const [products, setProducts] = useState<any[]>([]);
  const formData = useFormValidate();
  const { handleSubmit } = formData;
  // console.log('formData: ', formData);

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
        userAddr: address + ' ' + addressDetail,
        shipName: orderUsername,
        shipPhone: orderPhone.split('-').join(''),
        shipAddr: orderAddress + ' ' + orderAddressDetail,
        orderMessage: orderRequest,
      };
      console.log(data);
      setCookies('orderData', data);
      async function TossPayment() {
        const tossPayments = await loadTossPayments(clientKey);
        tossPayments.requestPayment('카드', {
          amount: prices.total + prices.delivery,
          orderId: uuidv4(),
          orderName: '인코스런 주문',
          customerName: '박토스',
          successUrl: 'http://localhost:3000/orderpage/success',
          failUrl: 'http://localhost:3000/fail',
        });
      }
      TossPayment();
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

// router.push(ROUTES.PURCHASE.SUCCESS);
