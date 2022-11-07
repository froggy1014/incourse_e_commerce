import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Box, ChakraProps, Stack, Text } from '@chakra-ui/react';

import { getMyOrders, getOrderStatus } from '@apis/_axios/axiosGet';

import { Loading } from '@components/common';

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
  const [total, setTotal] = useState<number>(0);
  const [uuidGroup, setUuidGroup] = useState<IItem[][]>([]);
  const [status, setStatus] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const { data: PageInfo, isLoading } = useQuery(
    [QUERY_KEY.MYORDERS, page],
    () => getMyOrders(page),
    { keepPreviousData: true },
  );

  useEffect(() => {
    if (PageInfo && total === 0) setTotal(Math.ceil(PageInfo.count / 4));
    if (PageInfo) setUuidGroup(divideArraybyuuid(PageInfo.results));
  }, [PageInfo]);

  useEffect(() => {
    if (uuidGroup.length) {
      const getStatus = async () => {
        const res = await getOrderStatus(uuidGroup);
        setStatus(res);
      };
      getStatus();
    }
  }, [uuidGroup]);
  if (isLoading && !uuidGroup) return <Loading />;

  if (status.length === 0) return <Loading />;

  return (
    <Box w="100%">
      <Text variant="pageTitle">내 상품 리뷰</Text>
      <Stack justify="center" align="center">
        {uuidGroup &&
          uuidGroup.map((uuid, i) => {
            return (
              <Box key={i} w="100%">
                <Text fontWeight="bold" my="20px">
                  [{formatDateDash(uuid[0]?.created)}]
                </Text>
                <HistoryCard items={uuid} />
                {STATUS.PAID.includes(status[i]) && (
                  <CancelButton
                    status={status[i]}
                    setOpen={setOpen}
                    open={open}
                    float="right"
                  />
                )}
                {STATUS.DONE === status[i] && (
                  <ReviewButton orderId={uuid[0].orderId} float="right" />
                )}
              </Box>
            );
          })}
      </Stack>
      <PageBar page={page} setPage={setPage} total={total} />
      {/* <CompleteModal
                title="주문취소가 완료되었습니다."
                isOpen={open}
                onClose={() => setOpen(!open)}
                setOpen={setOpen}
              /> */}
    </Box>
  );
}

export default MypageOrderhistoryPage;
