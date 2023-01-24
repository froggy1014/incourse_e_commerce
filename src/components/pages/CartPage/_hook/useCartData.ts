import { useMutation, useQuery } from 'react-query';

import axios from 'axios';

import { delCartItem } from '@apis/_axios/delete';
import { getCartInfo, getProductDetail } from '@apis/_axios/get/axiosGet';

/* --------------------- Get All Cart Item Hook -------------------- */

export const useGetCart = (uid: number) => {
  return useQuery(['CartList'], () => getCartInfo(uid));
};

/* --------------------- Delete Selected Item Hook -------------------- */

// const deleteCartItem = async (pk: number) => {
//   return axios.delete(`cart/item/${pk}/`, {
//     headers: {
//       'X-CSRFTOKEN':
//         'TalC545PNF0jkgM6JdXJfqBnCctwqdQauOXjQ0f0ZdRmL14CETFOfJ0NncPcvFSG',
//     },
//   });
// };

export const useDeleteCart = () => {
  return useMutation(['cartItem, id'], delCartItem);
};

/* -----------------------Get Individual Product Info----------------------- */

export const useGetItemInfo = (id: number) => {
  return useQuery(['ItemInfo', id], () => getProductDetail(id));
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
