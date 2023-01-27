export type TStatus = {
  oid: string;
  status: string;
};

export interface IProfileInfo {
  name: string;
  nickname: string;
  phone: string;
  email: string;
  profilePath: string;
  gender: string;
  age: number;
}

export interface IOrderInfo {
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
