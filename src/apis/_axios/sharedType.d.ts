export interface IPostOrder {
  userId: CookieValueTypes;
  price: number;
  method: string;
  userName: string;
  userPhone: string;
  userAddrPost: string | undefined;
  userAddr: string | undefined;
  userAddrDetail: string;
  shipName: string;
  shipPhone: string;
  shipAddrPost: string | undefined;
  shipAddr: string | undefined;
  shipAddrDetail: string;
  orderMessage: string;
}

export interface IPostReturn {
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
  shippingPrice: Number;
  userAddr: string;
}
