import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Button, Divider, Flex, Stack } from '@chakra-ui/react';

import { Loading } from '@components/common';
import CompleteModal from '@components/common/GlobalModal/CompleteModal';

import { ROUTES } from '@constants/routes';

import { IItem } from '../OrderHistory';
import { getOrderDetail } from '../_Hooks/useGetOrderQuery';
import ItemCard from './ItemCard';

const HistoryCard = ({ orderId }: { orderId: string }) => {
  // const { count, shippingStatus, created } = orderProducts;
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useQuery(['order', orderId], () =>
    getOrderDetail(orderId),
  );

  const modalHandler = async () => {
    setOpen(!open);
  };

  if (isLoading) return <Loading />;

  return (
    <Stack mb="20px" divider={<Divider />}>
      {data.map((item: IItem) => {
        return <ItemCard key={item.id} item={item} />;
      })}
      <Flex justify="end">
        {data.map((item: IItem, i: number) => {
          if (item.shippingStatus === 'PAID' && i === 0) {
            return (
              <Button
                colorScheme="commerse"
                w="140px"
                color="white"
                onClick={() => modalHandler()}
              >
                주문취소
              </Button>
            );
          }
          if (item.shippingStatus === 'DONE' && i === 0) {
            return (
              <Button
                bg="white"
                colorScheme="commerse"
                w="140px"
                color="commerse.500"
                onClick={() => router.push(ROUTES.MYPAGE.POSTREVIEW)}
              >
                리뷰작성
              </Button>
            );
          }
        })}
        <CompleteModal
          title="주문취소가 완료되었습니다."
          isOpen={open}
          onClose={() => modalHandler()}
        />
      </Flex>
    </Stack>
  );
};

export default HistoryCard;
