import { useMutation, useQuery, useQueryClient } from 'react-query';

import axios from 'axios';
import { getCookie } from 'cookies-next';

import { axiosInstance } from '@utils/axios';

axios.defaults.baseURL = 'https://api.commerce.incourse.run/v1/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

/* --------------------- Get All Cart Item Hook -------------------- */

const fetchCartList = async () => {
  return await axios
    .get(`cart/?user_id=29`)
    .then((res) => res.data[0].cartitem);
};

export const useGetCart = () => {
  return useQuery(['CartList'], fetchCartList);
};

/* --------------------- Delete Selected Item Hook -------------------- */

const deleteCartItem = async (pk: number) => {
  return axios.delete(`cart/item/${pk}/`, {
    headers: {
      'X-CSRFTOKEN':
        'TalC545PNF0jkgM6JdXJfqBnCctwqdQauOXjQ0f0ZdRmL14CETFOfJ0NncPcvFSG',
    },
  });
};

export const useDeleteCart = (onSuccess: () => void) => {
  return useMutation(deleteCartItem, {
    onSuccess,
  });
};

/* -----------------------Get Individual Product Info----------------------- */

const getItemInfo = async (ItemId: number) => {
  return axios(`product/${ItemId}/`).then((res) => res.data);
};

export const useGetItemInfo = (id: number) => {
  return useQuery(['ItemInfo', id], () => getItemInfo(id));
};

/* ---------------------Get Individual Item from Cart------------------*/

const getCartItem = async (cartItemId: number) => {
  return axios(`cart/item/${cartItemId}/`).then((res) => res.data);
};

export const useGetCartItem = (id: number) => {
  return useQuery(['cartItem', id], () => getCartItem(id));
};

/* ----------------Patch Individual Item's Count in Cart ------------------*/

const patchCartItem = async ({ id, count }: { id: number; count: number }) => {
  return axios.patch(`cart/item/${id}/`, { count: count });
};

export const usePatchCartItem = (
  counting: { id: number; count: number },
  onSuccess: () => void,
) => {
  return useMutation(['cartItem', counting.id], () => patchCartItem(counting), {
    onSuccess,
  });
};
