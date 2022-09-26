import React, { useState } from 'react';

import { Box, ChakraProps, useDisclosure } from '@chakra-ui/react';

import ProductCard from './_fragment/ProductCard';
import PurchaseModal from './_fragment/PurchaseModal';

interface ProductPageProps extends ChakraProps {}

const productInfo = [
  {
    id: '0',
    name: '바스 & 샴푸',
    description:
      '머리부터 발끝까지 한번에! 마일드한 세정을 도와주는 올인원 클렌저',
    price: 27000,
    capacity: 300,
    tags: ['올인원', '클렌저', '마일드', '바스 & 샴푸'],
    avgRate: '4.3',
    reviewCount: '125',
    created: '2022-09-26T08:10:13.948Z',
    imgurl: '/images/ProductProfile.png',
  },
  {
    id: '1',
    name: '오일',
    description:
      '머리부터 발끝까지 한번에! 마일드한 세정을 도와주는 올인원 오일',
    price: 25000,
    capacity: 50,
    tags: ['올인원', '클렌저', '마일드', '오일'],
    avgRate: '4.3',
    reviewCount: '125',
    created: '2022-09-26T08:10:13.948Z',
    imgurl: '/images/ProductProfile.png',
  },
  {
    id: '2',
    name: '로션',
    description:
      '머리부터 발끝까지 한번에! 마일드한 세정을 도와주는 올인원 로션',
    price: 20000,
    capacity: 100,
    tags: ['올인원', '클렌저', '마일드', '로션'],
    avgRate: '4.3',
    reviewCount: '125',
    created: '2022-09-26T08:10:13.948Z',
    imgurl: '/images/ProductProfile.png',
  },
  {
    id: '3',
    name: '크림',
    description:
      '머리부터 발끝까지 한번에! 마일드한 세정을 도와주는 올인원 크림',
    price: 18000,
    capacity: 310,
    tags: ['올인원', '클렌저', '마일드', '크림'],
    avgRate: '4.3',
    reviewCount: '125',
    created: '2022-09-26T08:10:13.948Z',
    imgurl: '/images/ProductProfile.png',
  },
  {
    id: '4',
    name: '파우더로션',
    description:
      '머리부터 발끝까지 한번에! 마일드한 세정을 도와주는 올인원 파우더로션',
    price: 30000,
    capacity: 200,
    tags: ['올인원', '클렌저', '마일드', '파우더로션'],
    avgRate: '4.3',
    reviewCount: '125',
    created: '2022-09-26T08:10:13.948Z',
    imgurl: '/images/ProductProfile.png',
  },
];

function ProductPage({ ...basisProps }: ProductPageProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [purchase, setPurchase] = useState<[string, number, string]>([
    '',
    0,
    '',
  ]);

  return (
    <>
      <Box mb="80px" {...basisProps}>
        {productInfo.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={onOpen}
              setPurchase={setPurchase}
            />
          );
        })}
      </Box>
      <PurchaseModal isOpen={isOpen} onClose={onClose} purchase={purchase} />
    </>
  );
}

export default ProductPage;
