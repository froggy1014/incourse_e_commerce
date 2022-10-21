import axios from 'axios';
import { getCookie } from 'cookies-next';

import { IOrderDetails, IOrderHistory } from '../OrderHistory';

async function getMyOrders() {
  return await axios(`https://api.commerce.incourse.run/v1/order/`)
    .then((res) => res.data)
    .then((data) =>
      data.filter(
        (v: IOrderHistory) => v.userId === Number(getCookie('userId')),
      ),
    )
    .catch((error) => console.log(error));
}

// export const useGetOrderQuery = () => {};

export async function getOrderDetail(orderId: string) {
  return await axios(
    `https://api.commerce.incourse.run/v1/order/status/?user_id=${getCookie(
      'userId',
    )}`,
  )
    .then((res) => res.data)
    .then((data) =>
      data.results.filter((v: IOrderDetails) => v.orderId === orderId),
    )
    .catch((error) => console.log(error));
}

export async function getProductDetail(productId: number) {
  return await axios(
    `https://api.commerce.incourse.run/v1/product/${productId}/`,
  )
    .then((res) => res.data)
    .catch((error) => console.log(error));
}
