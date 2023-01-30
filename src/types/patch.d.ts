export interface IPatchStatus {
  id: string;
  shippingStatus: string;
}

export interface IPatchGetme {
  id: number;
  name: string;
  nickname: string;
  phone: string;
  email: string;
  profile: string;
  gender: string;
  age: number;
}

export interface IPatchCartItem {
  count: number;
}

export interface IPatchOrderInfo {
  id: string;
  price: number;
  shippingPrice: number;
  amount: number;
  method: string;
  status: string;
  userName: string;
  userPhone: string;
  userAddrPost: string;
  userAddr: string;
  userAddrDetail: string;
  shipName: string;
  shipPhone: string;
  shipAddrPost: string;
  shipAddr: string;
  shipAddrDetail: string;
  orderMessage: string;
  shippingStatus: string;
  created: string;
}

export interface IPatchOrderInfoBody {
  price: string;
  paymentKey: string;
  method: string;
  userName: string;
  userPhone: string;
  userAddrPost: string;
  userAddrDetail: string;
  shipName: string;
  shipPhone: string;
  shipAddrPost: string;
  shipAddrDetail: string;
  orderMessage: string;
}
