import React from 'react';

import { Box, Button, ChakraProps, Flex, Image, Text } from '@chakra-ui/react';

interface ProductDetailByIdPageProps extends ChakraProps {
  id?: string | string[];
}

function ProductDetailByIdPage({
  id,
  ...basisProps
}: ProductDetailByIdPageProps) {
  return (
    <Box {...basisProps}>
      <Text>ProductDetailByIdPage</Text>
    </Box>
  );
}

export default ProductDetailByIdPage;
