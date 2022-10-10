import React, { useEffect, useState } from 'react';
// import InfiniteScroll from 'react-infinite-scroller';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { Box, useDisclosure } from '@chakra-ui/react';

import { storeProduct } from '@features/pg/pgSlice';
import { setCartId } from '@features/user/userSlice';

import { axiosInstance } from '@utils/axios';

import ProductCard from './_fragment/ProductCard';
import PurchaseModal from './_fragment/PurchaseModal';
import { ProductPageType, dataType } from './data';

function ProductPage({ ...props }: ProductPageType) {
  const dispatch = useDispatch();
  const { data } = props;
  const [products, setProducts] = useState(data);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userid } = useSelector((state: RootStateOrAny) => state.USER);

  useEffect(() => {
    async function productFuc() {
      dispatch(storeProduct(data));
      await axiosInstance(`cart/?user_id=${userid}`).then((res) => {
        dispatch(setCartId(res.data[0].id));
      });
    }
    productFuc();
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
