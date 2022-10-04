import React, { useEffect, useState } from 'react';
// import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch } from 'react-redux';

import { Box, useDisclosure } from '@chakra-ui/react';

import { storeProduct } from '@features/pg/pgSlice';

import ProductCard from './_fragment/ProductCard';
import PurchaseModal from './_fragment/PurchaseModal';
import { ProductPageType, dataType } from './data';

function ProductPage({ ...props }: ProductPageType) {
  const dispatch = useDispatch();
  const { data } = props;
  const [products, setProducts] = useState(data);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    dispatch(storeProduct(data));
  }, [data]);

  return (
    <>
      <Box mb="80px">
        {products.map((product: dataType) => {
          return (
            <ProductCard key={product.id} product={product} onOpen={onOpen} />
          );
        })}
      </Box>
      <PurchaseModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default ProductPage;
