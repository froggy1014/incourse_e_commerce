import { IPostReviewBody } from './axiosPostType';
import { post } from './request';

export async function postReview(body: IPostReviewBody): Promise<void> {
  return await post('review/', body);
}
