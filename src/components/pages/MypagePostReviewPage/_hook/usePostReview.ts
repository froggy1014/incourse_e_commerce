import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';
import { UseMutateFunction, useMutation } from 'react-query';

import { getCookie } from 'cookies-next';

import { postReview } from '@apis/_axios/post/axiosPost';
import { IPostReviewBody } from '@apis/_axios/post/axiosPostType';

interface UsePostReview {
  postingReview: UseMutateFunction<void, unknown, void, unknown>;
  setBody: Dispatch<SetStateAction<IPostReviewBody>>;
  body: IPostReviewBody;
}

export const usePostReview = (onSuccess: () => void): UsePostReview => {
  const router = useRouter();
  const userId = getCookie('userId');
  const [body, setBody] = useState<IPostReviewBody>({
    userId: Number(userId),
    productId: Number(router.query.productId),
    orderItemId: Number(router.query.id),
    rate: 0,
    content: '',
    reviewimagePath: [],
  });
  const { mutate: postingReview } = useMutation(() => postReview(body), {
    onSuccess,
  });
  return { postingReview, setBody, body };
};
