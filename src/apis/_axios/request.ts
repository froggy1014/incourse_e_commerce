import { getCookie } from 'cookies-next';

import request from './core';
import { IPostOrder, IPostReturn } from './sharedType';

export const userId = Number(getCookie('userId'));

export async function getMyOrders(pageParam: Number) {
  return await request
    .get(`order/status/?page=${pageParam}&page_size=4&user_id=${userId}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function getProductDetail(productId: number | undefined) {
  return await request
    .get(`product/${productId}/`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function postOrderId(data: IPostOrder): Promise<IPostReturn> {
  return await request
    .post('order/', data)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}
