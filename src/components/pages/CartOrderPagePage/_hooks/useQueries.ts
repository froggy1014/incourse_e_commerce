import { useQuery } from 'react-query';

import axios from 'axios';

import { loadTossPayments } from '@tosspayments/payment-sdk';
import { axiosInstance } from '@utils/axios';

const fetchMyInfo = async () => {
  return await axiosInstance('user/me/').then((res: any) => res.data);
};

export const useGetme = () => {
  return useQuery(['getMe'], fetchMyInfo);
};

export const postOrderStatus = async (
  orderId: string,
  productId: number,
  count: number,
) => {
  const body = {
    orderId: orderId,
    productId: productId,
    count: count,
  };
  try {
    return await axios.post('order/status/', body).then((res) => res.data);
  } catch (error) {
    console.log(error);
  }
};

export async function TossPayment(
  orderId: string,
  total: number,
  delivery: number,
  userName: string,
  Toss_Key: string,
  payingItems: string[],
) {
  const tossPayments = await loadTossPayments(Toss_Key);
  tossPayments.requestPayment('카드', {
    amount: total + delivery,
    orderId: orderId,
    orderName: '인코스런 주문',
    customerName: userName,
    successUrl: `http://localhost:3000/orderpage/success?items=${payingItems}`,
    failUrl: 'http://localhost:3000/fail',
  });
}
