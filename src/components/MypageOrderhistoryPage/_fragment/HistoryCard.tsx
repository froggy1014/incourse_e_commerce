import React from 'react';
import { useQueries } from 'react-query';

import { Box, Divider, Stack } from '@chakra-ui/react';

import { getProductDetail } from '@apis/_axios/request';

import { Loading } from '@components/common';

import { IItem } from '../OrderHistory';
import ItemCard from './ItemCard';

const HistoryCard = ({ items }: { items: (IItem | undefined)[] }) => {
  const data = useQueries(
    items.map((uuidItem) => {
      return {
        queryKey: ['product', uuidItem?.productId],
        queryFn: async () => await getProductDetail(uuidItem?.productId),
      };
    }),
  );

  if (data[0].isLoading) return <Loading />;

  return (
    <Stack mb="10px">
      {data?.map((item, i) => {
        return (
          <Box key={i}>
            <ItemCard item={item.data} count={items[i]?.count} />
            <Divider mt="10px" variant="fullthin" />
          </Box>
        );
      })}
    </Stack>
  );
};

export default HistoryCard;
