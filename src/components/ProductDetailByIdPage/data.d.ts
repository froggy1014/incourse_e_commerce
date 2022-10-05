export interface DetailType {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  detail: string;
  photo: string;
  reviewList: reviewListType;
  avgRate: string;
  reviewCount: string;
}

export interface reviewListType {
  id: number;
  userId: number;
  nickname: string;
  rate: number;
  content: string;
  created: string;
  reviewimageSet: imageSetType[];
  length: nunmber;
}

interface imageSetType {
  reviewId: number;
  url: string;
}

export interface avgType {
  sum: number;
  countNums: any[];
  total: number;
}
