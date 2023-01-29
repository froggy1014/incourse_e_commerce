export interface IPatchOrder {
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

export interface IOrderedItem {
  id: number;
  cartId: number;
  productId: number;
  count: number;
}

export interface IProductDetail {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  detail: string;
  photo: string;
  reviewList: string;
  avgRate: number;
  reviewCount: number;
}
