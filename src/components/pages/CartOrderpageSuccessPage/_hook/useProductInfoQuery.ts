import { useQuery } from 'react-query';

import axios from 'axios';

const fetchProductInfo = (products: any) => {
  const pks = products.map((product: any) => product.productId);
  return axios.all(
    pks.map((pk: number) =>
      axios
        .get(`https://api.commerce.incourse.run/v1/product/${pk}/`)
        .then((res) => res.data),
    ),
  );
};

export const useProductInfoQuery = (products: any) => {
  return useQuery(['orderedProduct'], () => fetchProductInfo(products));
};
