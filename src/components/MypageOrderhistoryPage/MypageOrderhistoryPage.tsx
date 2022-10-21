import React from 'react';
import { useQuery } from 'react-query';

import axios from 'axios';
import { getCookie } from 'cookies-next';

import { Box, ChakraProps, Divider, Stack, Text } from '@chakra-ui/react';

import { Loading } from '@components/common';

import { formatDateDash } from '@utils/format';

import { IOrderHistory } from './OrderHistory';
import HistoryCard from './_fragment/HistoryCard';

interface MypageOrderhistoryPageProps extends ChakraProps {}

function MypageOrderhistoryPage({
  ...basisProps
}: MypageOrderhistoryPageProps) {
  async function getMyOrders() {
    return await axios(
      `https://api.commerce.incourse.run/v1/order/?user_id=${getCookie(
        'userId',
      )}`,
    )
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

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
