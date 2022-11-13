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
