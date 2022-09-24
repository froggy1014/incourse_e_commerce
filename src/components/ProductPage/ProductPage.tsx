import React from 'react';

import { Box, ChakraProps } from '@chakra-ui/react';

import ProductCard from './_fragment/ProductCard';

interface ProductPageProps extends ChakraProps {}

const productInfo = [
  {
    id: 1,
    imgurl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdNvtmQ%2FbtrMVG0Mmfq%2FFt80eqvk8rOyqvlFmacn00%2Fimg.png',
    name: '바스 & 샴푸',
    volume: 300,
    price: 27000,
    rating: 4.3,
    review: 125,
    hash_tag: ['올인원', '클렌저', '마일드', '바스앤샴푸'],
  },
  {
    id: 2,
    imgurl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdNvtmQ%2FbtrMVG0Mmfq%2FFt80eqvk8rOyqvlFmacn00%2Fimg.png',
    name: '오일',
    volume: 150,
    price: 27000,
    rating: 4.3,
    review: 125,
    hash_tag: ['올인원', '클렌저', '마일드', '오일'],
  },
  {
    id: 3,
    imgurl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdNvtmQ%2FbtrMVG0Mmfq%2FFt80eqvk8rOyqvlFmacn00%2Fimg.png',
    name: '로션',
    volume: 250,
    price: 27000,
    rating: 4.3,
    review: 125,
    hash_tag: ['올인원', '클렌저', '마일드', '로션'],
  },
  {
    id: 4,
    imgurl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdNvtmQ%2FbtrMVG0Mmfq%2FFt80eqvk8rOyqvlFmacn00%2Fimg.png',
    name: '크림',
    volume: 250,
    price: 27000,
    rating: 4.3,
    review: 125,
    hash_tag: ['올인원', '클렌저', '마일드', '크림'],
  },
  {
    id: 5,
    imgurl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdNvtmQ%2FbtrMVG0Mmfq%2FFt80eqvk8rOyqvlFmacn00%2Fimg.png',
    name: '크림',
    volume: 100,
    price: 27000,
    rating: 4.3,
    review: 125,
    hash_tag: ['올인원', '클렌저', '마일드', '파우더로션'],
  },
];

function ProductPage({ ...basisProps }: ProductPageProps) {
  return (
    <Box {...basisProps}>
      {productInfo.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Box>
  );
}

export default ProductPage;
