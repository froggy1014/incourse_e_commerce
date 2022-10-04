type ImageType = {
  reviewId: number;
  url: string;
};

export interface ReviewTypes {
  content: string;
  created: string;
  id: number;
  orderItemId: number;
  productId: number;
  rate: number5;
  reviewimageSet: ImageType[];
  userId: number;
}

export interface AllReviewTypes {
  count?: number;
  next?: null;
  previous?: null;
  results: ReviewTypes[];
}
