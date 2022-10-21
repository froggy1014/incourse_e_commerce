import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Box, Divider, Flex, Stack } from '@chakra-ui/react';

import { Loading } from '@components/common';
import CompleteModal from '@components/common/GlobalModal/CompleteModal';

import { IItem } from '../OrderHistory';
import { getOrderDetail } from '../_Hooks/useGetOrderQuery';
import ItemCard from './ItemCard';
import OrderButton from './OrderButton';

const HistoryCard = ({ orderId }: { orderId: string }) => {
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useQuery(['order', orderId], () =>
    getOrderDetail(orderId),
  );

  if (isLoading) return <Loading />;

  return (
    <Stack mb="20px">
      {data.map((item: IItem) => {
        return (
          <Box key={item.id}>
            <ItemCard item={item} />
            <Divider mt="10px" variant="fullthin" />
          </Box>
        );
      })}
      <Flex justify="end">
        <OrderButton
          status={data[0].shippingStatus}
          setOpen={setOpen}
          open={open}
        />
      </Flex>
      <CompleteModal
        title="주문취소가 완료되었습니다."
        isOpen={open}
        onClose={() => setOpen(!open)}
        setOpen={setOpen}
      />
    </Stack>
  );
};

export default HistoryCard;
