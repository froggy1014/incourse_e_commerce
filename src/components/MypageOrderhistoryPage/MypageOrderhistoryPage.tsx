import React, { useEffect, useState } from 'react';
import { useQueries, useQuery } from 'react-query';

import { Box, Stack, Text } from '@chakra-ui/react';

import { getMyOrders, getOrderStatus } from '@apis/_axios/axiosGet';

import { AskModal, CompleteModal, Loading } from '@components/common';

import { QUERY_KEY } from '@constants/query-keys';
import { STATUS } from '@constants/status';
import { divideArraybyuuid } from '@utils/array';
import { formatDateDash } from '@utils/format';

import { IItem } from './OrderHistory';
import CancelButton from './_fragment/CancelButton';
import HistoryCard from './_fragment/HistoryCard';
import PageBar from './_fragment/PageBar';
import ReviewButton from './_fragment/ReviewButton';

function MypageOrderhistoryPage() {
  const [open, setOpen] = useState(false);
  const [canceled, setCanceled] = useState(false);
  const [orderId, setOrderId] = useState<string>('');
  const [total, setTotal] = useState<number>(0);
  const [uuidGroup, setUuidGroup] = useState<IItem[][]>([]);
  const [page, setPage] = useState(1);

  const { data: PageInfo } = useQuery(
    [QUERY_KEY.MYORDERS, page],
    () => getMyOrders(page),
    { keepPreviousData: true },
  );

  const data = useQueries(
    uuidGroup.map((group: IItem[]) => {
      const oid = group[0].orderId;
      return {
        queryKey: [QUERY_KEY.MYORDERSSTATUS, oid, page],
        queryFn: async () => await getOrderStatus(oid),
      };
    }),
  );

  useEffect(() => {
    if (PageInfo && total === 0) setTotal(Math.ceil(PageInfo.count / 4));
    if (PageInfo) setUuidGroup(divideArraybyuuid(PageInfo.results));
  }, [PageInfo]);

  if (data.length === 0 || data.some((d) => d.isLoading === true))
    return <Loading />;

  return (
    <Box w="100%">
      <Text variant="pageTitle">내 상품 리뷰</Text>
      <Stack justify="center" align="center">
        {uuidGroup.map((uuid, i) => {
          return (
            <Box key={i} w="100%">
              <Text fontWeight="bold" my="20px">
                [{formatDateDash(uuid[0]?.created)}]
              </Text>
              <HistoryCard items={uuid} status={data[i].data.shippingStatus} />
              {STATUS.NOTARRIVCE.includes(data[i].data.shippingStatus) && (
                <CancelButton
                  status={data[i].data.shippingStatus}
                  setOpen={setOpen}
                  open={open}
                  float="right"
                  oid={uuid[0].orderId}
                  setOrderId={setOrderId}
                />
              )}
              {STATUS.DONE === data[i].data.shippingStatus && (
                <ReviewButton orderId={uuid[0].orderId} float="right" />
              )}
            </Box>
          );
        })}
      </Stack>
      <PageBar page={page} setPage={setPage} total={total} />
      <AskModal
        title="주문취소 하시겠습니까?"
        isOpen={open}
        onClose={() => setOpen(!open)}
        setOpen={setOpen}
        setCanceled={setCanceled}
        orderId={orderId}
      />
      <CompleteModal
        title="주문취소가 완료되었습니다."
        isOpen={canceled}
        onClose={() => setCanceled(!canceled)}
        setOpen={setCanceled}
      />
    </Box>
  );
}

export default MypageOrderhistoryPage;
