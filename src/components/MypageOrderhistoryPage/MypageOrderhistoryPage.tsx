import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Box, ChakraProps, Stack, Text } from '@chakra-ui/react';

import { getMyOrders } from '@apis/_axios/request';

import { Loading } from '@components/common';

import { QUERY_KEY } from '@constants/query-keys';
import { divideArraybyuuid } from '@utils/array';
import { formatDateDash } from '@utils/format';

import { IItem } from './OrderHistory';
import HistoryCard from './_fragment/HistoryCard';
import OrderButton from './_fragment/OrderButton';
import PageBar from './_fragment/PageBar';

function MypageOrderhistoryPage() {
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState<number>(0);
  const [uuidGroup, setUuidGroup] = useState<(IItem | undefined)[][]>([]);
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

  if (isLoading && !uuidGroup) return <Loading />;
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
                <OrderButton
                  status={uuid[0]?.shippingStatus}
                  setOpen={setOpen}
                  open={open}
                  float="right"
                />
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
