import React from 'react';

import OrderPageView from './CartOrderPage.view';
import useFormValidate from './_hooks/useFormValidate';

// interface SignUpPageProps extends ChakraProps { }

const userInfo = {
  name: '이정민',
  phone: '010-8979-1169',
};

const OrderPage = () => {
  const formData = useFormValidate();
  const { handleSubmit } = formData;
  console.log('formData: ', formData);

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
      console.log(
        `submitted: ${username},  ${phone}, ${address}, ${addressDetail}, ${orderUsername},  ${orderPhone}, ${orderAddress}, ${orderAddressDetail},${orderRequest}`,
      );
    },
  );
  return (
    <OrderPageView
      formData={formData}
      onSubmit={onSubmit}
      userInfo={userInfo}
    />
  );
};

export default OrderPage;
