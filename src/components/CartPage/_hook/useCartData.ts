import { useMutation, useQuery } from 'react-query';

import axios from 'axios';
import { getCookie } from 'cookies-next';

import { axiosInstance } from '@utils/axios';

/* --------------------- Get All Cart Item Hook -------------------- */

const fetchCartList = async () => {
  return await axiosInstance(`cart/?user_id=${getCookie('userId')}`).then(
    (res) => res.data[0].cartitem,
  );
};

export const useGetCart = () => {
  return useQuery(['CartList'], fetchCartList, {});
};

/* ------------------------------------------------------------------ */

/* --------------------- Delete Selected Item Hook -------------------- */

const deleteCartItem = async (pk: number) => {
  return axiosInstance.delete(`cart/item/${pk}/`, {
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

/* ------------------------------------------------------------------ */

const getItemInfo = async (ItemId: number) => {
  return axios(`product/${ItemId}/`).then((res) => res.data);
};

export const useGetItemInfo = (id: number) => {
  return useQuery(['ItemInfo', [id]], () => getItemInfo(id));
};

/* -------------------------------------------------------------------*/

const getCartItem = async (cartItemId: number) => {
  return axios(`cart/item/${cartItemId}/`).then((res) => res.data);
};

export const useGetCartItem = (id: number) => {
  return useQuery(['cartItem', [id]], () => getCartItem(id));
};
