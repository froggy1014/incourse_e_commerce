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
