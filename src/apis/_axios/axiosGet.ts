import { CookieValueTypes, getCookie } from 'cookies-next';

import { get } from './request';

export const userId = getCookie('userId');

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

export async function getOrderStatus(oid: string) {
  return await get(`order/${oid}/`);
}

export async function getMe() {
  return await get('user/me/');
}

export async function getCartInfo(uid: number) {
  return await get(`cart/?user_id=${uid}`);
}

/*************************ServerSide********************************/

export async function getOrderList(userId: CookieValueTypes) {
  return get(`order/status/?user_id=${userId}`);
}
