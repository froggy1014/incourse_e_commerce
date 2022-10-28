import Link from 'next/link';
import React from 'react';
import { useQueries } from 'react-query';

import { Box, Button, Divider, Stack } from '@chakra-ui/react';

import { getProductDetail } from '@apis/_axios/request';

import { Loading } from '@components/common';

import { ROUTES } from '@constants/routes';

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
            <Link
              href={`${ROUTES.MYPAGE.POSTREVIEW}?productId=${item.data?.id}&count=${items[i]?.count}&date=${items[i]?.created}&orderItemId=${items[i]?.id}`}
            >
              <Button>리뷰 작성</Button>
            </Link>
          </Box>
        );
      })}
    </Stack>
  );
};

export default HistoryCard;
