import React from 'react';

import { Box, Button, ChakraProps, Flex, Image, Text } from '@chakra-ui/react';

interface CartOrderpageSuccessPageProps extends ChakraProps {}

function CartOrderpageSuccessPage({
  ...basisProps
}: CartOrderpageSuccessPageProps) {
  return (
    <Box {...basisProps}>
      <Text>Order Success !! </Text>
    </Box>
  );
}

export default CartOrderpageSuccessPage;
