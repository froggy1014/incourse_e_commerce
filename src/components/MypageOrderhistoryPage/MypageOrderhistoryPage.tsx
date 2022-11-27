import React, { useEffect, useState } from 'react';
import { useQueries, useQuery } from 'react-query';

import { Box, Stack, Text } from '@chakra-ui/react';

import { getMyOrders, getOrderStatus } from '@apis/_axios/get/axiosGet';

import { QUERY_KEY } from '@constants/query-keys';
import { STATUS } from '@constants/status';
import { AskModal, CompleteModal, Loading } from '@shareComponents/index';
import { divideArraybyuuid } from '@utils/array';
import { formatDateDash } from '@utils/format';

import { IItem } from './OrderHistory';
import CancelButton from './_fragment/CancelButton';
import EmptyOrder from './_fragment/EmptyOrder';
import HistoryCard from './_fragment/HistoryCard';
import PageBar from './_fragment/PageBar';
import StatusMenu from './_fragment/StatusMenu';

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

  if (data.some((d) => d.isLoading === true)) return <Loading />;

  if (data.length === 0) return <EmptyOrder />;

  return (
    <Box w="100%">
      <Text variant="pageTitle">내 상품 리뷰</Text>
      <Stack justify="center" align="center">
        {uuidGroup.map((uuid, i) => {
          console.log(uuid);
          return (
            <Box key={i} w="100%">
              <Text fontWeight="bold" my="20px">
                [{formatDateDash(uuid[0]?.created)}]
              </Text>
              <StatusMenu orderId={uuid[0].orderId} />
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
