import { useQuery } from 'react-query';

import axios from 'axios';

import { getProductDetail } from '@apis/_axios/get/axiosGet';

const fetchProductInfo = (products: any) => {
  const pks = products.map((product: any) => product.productId);
  return axios.all(pks.map((pk: number) => getProductDetail(pk)));
};

export const useProductInfoQuery = (products: any) => {
  return useQuery(['orderedProduct'], () => fetchProductInfo(products));
};
