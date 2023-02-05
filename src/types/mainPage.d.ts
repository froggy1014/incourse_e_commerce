type ImageType = {
  id: number;
  reviewId: number;
  url: string;
};

export interface ReviewTypes {
  id: number;
  name: string;
  reviewList: reviewList[];
}

export interface AllReviewTypes {
  count?: number;
  next?: null;
  previous?: null;
  results: ReviewTypes[];
}

export interface IReviewList {
  content: string;
  created: string;
  id: number;
  nickname: string;
  rate: number;
  reviewimageSet: ImageType[];
  reviewreplySet: IReviewReplySet[];
  userId: number;
}

export interface IReviewReplySet {
  content: string;
  created: string;
  id: number;
  replyUserNickname: string;
  reviewId: number;
}
