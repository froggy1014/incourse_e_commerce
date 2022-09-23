import React from 'react';

import { Box, ChakraProps } from '@chakra-ui/react';

import ProductCard from './_fragment/ProductCard';

interface ProductPageProps extends ChakraProps {}

function ProductPage({ ...basisProps }: ProductPageProps) {
  return (
    <Box {...basisProps}>
      <ProductCard />
    </Box>
  );
}

export default ProductPage;
