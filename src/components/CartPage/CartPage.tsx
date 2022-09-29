import React from 'react';

import { Box, Button, ChakraProps, Flex, Image, Text } from '@chakra-ui/react';

interface CartPageProps extends ChakraProps {}

function CartPage({ ...basisProps }: CartPageProps) {
  return (
    <Box {...basisProps}>
      <Text>CartPage</Text>
    </Box>
  );
}

export default CartPage;
