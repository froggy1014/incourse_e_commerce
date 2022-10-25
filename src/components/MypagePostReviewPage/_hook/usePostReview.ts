import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';
import { UseMutateFunction, useMutation } from 'react-query';

import axios from 'axios';
import { getCookie } from 'cookies-next';

axios.defaults.baseURL = 'https://api.commerce.incourse.run/v1/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access')}`;

interface IBody {
  userId: number;
  productId: number;
  orderItemId: number;
  rate: number;
  content: string;
  reviewimagePath: string[];
}

interface IReviewImage {
  reviewId: number;
  url: string;
}

interface IPostRes {
  id: number;
  userId: number;
  nickname: string;
  productId: number;
  orderItemId: number;
  rate: number;
  content: [string];
  reviewimageSet: IReviewImage[];
  created: string;
}

async function postReview(body: IBody): Promise<IPostRes> {
  console.log(body);
  return await axios.post('review/', body).then((res) => res.data);
}

interface UsePostReview {
  postingReview: UseMutateFunction<IPostRes, unknown, void, unknown>;
  setBody: Dispatch<SetStateAction<IBody>>;
  body: IBody;
}

export const usePostReview = (): UsePostReview => {
  const router = useRouter();
  const userId = getCookie('userId');
  const productId = router.query.productId;
  const orderItemId = router.query.orderItemId;
  const [body, setBody] = useState<IBody>({
    userId: Number(userId),
    productId: Number(productId),
    orderItemId: Number(orderItemId),
    rate: 0,
    content: '',
    reviewimagePath: [],
  });

  const { mutate: postingReview } = useMutation(() => postReview(body), {
    onSuccess: (result) => {
      console.log(result);
    },
  });

  return { postingReview, setBody, body };
};
