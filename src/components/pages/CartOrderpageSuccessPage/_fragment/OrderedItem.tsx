import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { IProductDetail } from '@types';

import { Box, HStack, Stack, Text } from '@chakra-ui/react';

export function OrderedItem({
  product,
  count,
}: {
  product: IProductDetail;
  count: number;
}) {
  const [imgSrc, setImgSrc] = useState(product.photo);

  useEffect(() => {
    setImgSrc(product.photo);
  }, [product]);

  return (
    <Stack key={product.id} mb="10px">
      <HStack justify="space-between">
        <HStack>
          <Box width="60px" height="60px" background="gray.100" rounded="5px">
            <Image
              width="60px"
              height="60px"
              src={imgSrc}
              onError={() => setImgSrc('/images/orderHistory.png')}
            />
          </Box>
          <Box>
            <Text fontWeight="bold">{product.name}</Text>
            <Text variant="normal12gray">
              {product.name} | {product.capacity}ml
            </Text>
            <Text variant="boldcommerse">
              {product.price}원 / {count}개
            </Text>
          </Box>
        </HStack>
        <Text variant="boldcommerse">결제완료</Text>
      </HStack>
    </Stack>
  );
}
