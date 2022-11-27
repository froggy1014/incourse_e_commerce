import { getCookie } from 'cookies-next';

import { post } from '../request';
import {
  ICreateCartReturn,
  IPostOrder,
  IPostReturn,
  IPostReviewBody,
  IRefreshTokenReturn,
  IRegisterUser,
  IRegisterUserReturn,
  ISocialLoginBody,
} from './axiosPostType';

export async function postReview(body: IPostReviewBody): Promise<void> {
  return await post('review/', body);
}

export async function postRequestToken(): Promise<IRefreshTokenReturn> {
  const refreshToken = getCookie('refresh');
  return await post('user/refresh/', { refresh: refreshToken });
}

export async function postSocialToken(body: ISocialLoginBody) {
  const data = await post('user/social_login/', body);
  return await data;
}

export async function postCart(userId: number) {
  return await post('user/social_login/', userId);
}

export async function postRegister(
  data: IRegisterUser,
): Promise<IRegisterUserReturn> {
  return await post('user/register/', data);
}

export async function postCreateCart(uid: number): Promise<ICreateCartReturn> {
  return await post('cart/', { userId: uid });
}

export async function postOrderId(data: IPostOrder): Promise<IPostReturn> {
  return await post('order/', data);
}
