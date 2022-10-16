import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { getCookie } from 'cookies-next';

import OrderPageView from './CartOrderPage.view';
import useFormValidate from './_hooks/useFormValidate';

// interface SignUpPageProps extends ChakraProps { }

const userInfo = {
  name: '이정민',
  phone: '010-8979-1169',
};

const OrderPage = () => {
  const router = useRouter();
  const [prices, setPrices] = useState({
    total: 0,
    delivery: 0,
  });
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
    },
  );
  return (
    <OrderPageView
      formData={formData}
      onSubmit={onSubmit}
      userInfo={userInfo}
      prices={prices}
      setPrices={setPrices}
    />
  );
};

export default OrderPage;

// router.push(ROUTES.PURCHASE.SUCCESS);
