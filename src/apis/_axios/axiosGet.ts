import axios from 'axios';
import { getCookie } from 'cookies-next';

import { IItem } from '@components/MypageOrderhistoryPage/OrderHistory';

import request from './core';
import { get } from './request';

export const userId = Number(getCookie('userId'));

export async function getMyOrders(pageParam: Number) {
  return await get(
    `order/status/?page=${pageParam}&page_size=4&user_id=${userId}`,
  );
}

export async function getProductDetail(productId: number | undefined) {
  return await get(`product/${productId}/`);
}

export async function getMyReviews(page: number) {
  return await get(`review/?page=${page}&page_size=4&user_id=${userId}`);
}

export async function getOrderStatus(uuidGroup: IItem[][]) {
  const orderIds = uuidGroup.map((uuid: IItem[]) => uuid[0].orderId);
  return axios.all(
    orderIds.map((orderId: string) =>
      request
        .get(`order/${orderId}/`)
        .then((res) => res.data)
        .then((data) => data.shippingStatus)
        .catch((error) => console.log(error)),
    ),
  );
}
