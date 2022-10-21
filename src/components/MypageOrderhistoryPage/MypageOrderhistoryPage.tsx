import React from 'react';
import { useQuery } from 'react-query';

import { Box, ChakraProps, Divider, Stack, Text } from '@chakra-ui/react';

import { Loading } from '@components/common';

import { formatDateDash } from '@utils/format';

import { IOrderHistory } from './OrderHistory';
import { getMyOrders } from './_Hooks/useGetOrderQuery';
import HistoryCard from './_fragment/HistoryCard';

interface MypageOrderhistoryPageProps extends ChakraProps {}

function MypageOrderhistoryPage({
  ...basisProps
}: MypageOrderhistoryPageProps) {
  const { data, isLoading } = useQuery(['MyOrders'], getMyOrders);

  if (isLoading) return <Loading />;

  return (
    <Box {...basisProps}>
      <Text variant="pageTitle">주문내역</Text>
      {data.map((order: IOrderHistory) => {
        return (
          <Stack key={order.id} divider={<Divider variant="fullthin" />}>
            <Text py="8px" fontWeight="bold">
              [{formatDateDash(order.created)}]
            </Text>
            <HistoryCard orderId={order.id} />
          </Stack>
        );
      })}
      <Stack p="50px"></Stack>
    </Box>
  );
}

export default MypageOrderhistoryPage;
