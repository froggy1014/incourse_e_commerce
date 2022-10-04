interface tagType {
  id: number;
  name: string;
}

export interface dataType {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  thumbnail: string;
  tags: tagType[];
  avgRate: number;
  reviewCount: number;
}

export interface ProductPageType {
  data: dataType[];
}
