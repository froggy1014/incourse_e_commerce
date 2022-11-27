export interface IPostReviewBody {
  userId: number;
  productId: number;
  orderItemId: number;
  rate: number;
  content: string;
  reviewimagePath: string[];
}

export interface IRefreshTokenReturn {
  access: string;
  refresh: string;
}

export interface ISocialLoginReturn {
  isRegister: boolean;
  socialToken: string;
  access: string;
  refresh: string;
}

export interface ISocialLoginBody {
  code: string | string[] | undefined;
  state: string | string[] | undefined;
}

export interface IRegisterUser {
  socialToken: CookieValueTypes;
  email: string;
  phone: string;
  name: string;
  nickname: string;
  profilePath: string;
  gender: string;
  age: number;
  marketingAdAgree: boolean;
}

export interface IRegisterUserReturn {
  id: number;
  profile: string;
  marketingAdAgree: boolean;
  access: string;
  refresh: string;
}

export interface ICreateCartReturn {
  id: number;
  cartitem: string;
  userId: number;
}

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
