import axios from 'axios';
import { getCookie } from 'cookies-next';

import { IItem } from './../../components/MypageOrderhistoryPage/OrderHistory.d';

export async function getMyOrders(pageParam: number) {
  return await axios(
    `https://api.commerce.incourse.run/v1/order/status/?page=${pageParam}&page_size=4&user_id=${getCookie(
      'userId',
    )}`,
  )
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function getOrderDetail(orderId: (IItem | undefined)[]) {
  return await axios.all(
    orderId.map((order: any) =>
      axios
        .get(
          `https://api.commerce.incourse.run/v1/order/status/?user_id=${getCookie(
            'userId',
          )}`,
        )
        .then((res) => res.data)
        .catch((error) => console.log(error)),
    ),
  );
}

export async function getProductDetail(productId: number | undefined) {
  return await axios(
    `https://api.commerce.incourse.run/v1/product/${productId}/`,
  )
    .then((res) => res.data)
    .catch((error) => console.log(error));
}
