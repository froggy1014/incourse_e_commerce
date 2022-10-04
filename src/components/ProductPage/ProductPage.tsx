import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { Box, useDisclosure } from '@chakra-ui/react';

import { useInfiniteQuery } from '@tanstack/react-query';
import { productFetch } from '@utils/axios';

import ProductCard from './_fragment/ProductCard';
import PurchaseModal from './_fragment/PurchaseModal';
import { ProductPageType, dataType } from './data';

function ProductPage({ ...props }: ProductPageType) {
  const { data } = props;
  const [products, setProducts] = useState(data);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [purchase, setPurchase] = useState<[string, number, number]>([
    '',
    0,
    0,
  ]);

  return (
    <>
      <Box mb="80px">
        {products.map((product: dataType) => {
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
