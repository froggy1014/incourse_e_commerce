export interface IPostReviewBody {
  userId: number;
  productId: number;
  orderItemId: number;
  rate: number;
  content: string;
  reviewimagePath: string[];
}
