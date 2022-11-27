interface IImageSet {
  reviewId: number;
  url: string;
}

export interface IMyReviews {
  content: string;
  created: string;
  id: number;
  nickname: string;
  orderItemId: number;
  productId: number;
  rate: number;
  reviewimageSet: IImageSet[];
  userId: number;
}
