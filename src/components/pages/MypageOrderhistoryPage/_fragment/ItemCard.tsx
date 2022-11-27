import React from 'react';

import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react';

import { intComma } from '@utils/format';

import { IProductDetail } from '../OrderHistory';

const ItemCard = ({
  item,
  count,
}: {
  item: IProductDetail;
  count: number | undefined;
}) => {
  return (
    <HStack fontSize="12px" justify="space-between">
      <HStack>
        <Image
          boxSize="60px"
          src="/images/orderHistory.png"
          bg="gray.100"
          rounded="5px"
        />
        <Box>
          <Text fontWeight="bold">{item?.name}</Text>
          <Text variant="normal12gray">
            {item?.name} | {item?.capacity}ml
          </Text>
          <Text variant="boldcommerse">
            {intComma(item?.price)}원/ {count}개
          </Text>
        </Box>
      </HStack>
    </HStack>
  );
};

export default ItemCard;
