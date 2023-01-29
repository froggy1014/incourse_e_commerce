import { useQuery } from 'react-query';

import { IOrderedItem, IProductDetail } from '@types';
import axios from 'axios';

import { getProductDetail } from '@apis/_axios/get/axiosGet';

const fetchProductInfo = (
  products: IOrderedItem[],
): Promise<IProductDetail[]> => {
  const pks = products.map((product: IOrderedItem) => product.productId);
  return axios.all(pks.map((pk: number) => getProductDetail(pk)));
};

export const useProductInfoQuery = (products: IOrderedItem[]) => {
  return useQuery(['orderedProduct'], () => fetchProductInfo(products));
};
