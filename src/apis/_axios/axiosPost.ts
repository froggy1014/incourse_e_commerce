import { getCookie } from 'cookies-next';

import { IPostReviewBody, IRefreshTokenReturn } from './axiosPostType';
import { post } from './request';

export async function postReview(body: IPostReviewBody): Promise<void> {
  return await post('review/', body);
}

export async function postRequestToken(): Promise<IRefreshTokenReturn> {
  const refreshToken = getCookie('refresh');
  return await post('user/refresh/', { refresh: refreshToken });
}
