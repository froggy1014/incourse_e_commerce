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
