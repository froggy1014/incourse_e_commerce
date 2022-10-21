export interface IOrderHistory {
  amount: number;
  created: string;
  id: string;
  method: string;
  orderMessage: string;
  price: number;
  shipAddrDetail: string;
  shipAddrPost: string;
  shipName: string;
  shipPhone: string;
  shippingPrice: number;
  status: string;
  userAddrDetail: string;
  userAddrPost: string;
  userId: number;
  userName: string;
  userPhone: string;
}

export interface IOrderDetails {
  id: number;
  orderId: string;
  productId: number;
  count: number;
  shippingStatus: string;
  created: string;
}

export interface IItem {
  count: number;
  created: string;
  id: number;
  orderId: string;
  productId: number;
  shippingStatus: string;
}
