import { useQuery } from 'react-query';

import { getMe } from '@apis/_axios/get/axiosGet';

import { loadTossPayments } from '@tosspayments/payment-sdk';

export const useGetme = () => {
  return useQuery(['getMe'], getMe);
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
    successUrl: `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/orderpage/success?items=${payingItems}`,
    failUrl: `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/fail`,
  });
}
