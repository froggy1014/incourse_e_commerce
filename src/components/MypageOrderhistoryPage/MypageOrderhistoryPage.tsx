import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Container, Stack, Text } from '@chakra-ui/react';

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
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState<number>(0);
  const [uuidGroup, setUuidGroup] = useState<(IItem | undefined)[][]>([]);

  const { data: PageInfo, isLoading } = useQuery(
    [QUERY_KEY.MYORDERS, page],
    () => getMyOrders(page),
  );

  useEffect(() => {
    if (PageInfo && total === 0) setTotal(Math.ceil(PageInfo.count / 4));
    if (PageInfo) setUuidGroup(divideArraybyuuid(PageInfo.results));
  }, [PageInfo]);

  if (isLoading && !uuidGroup) return <Loading />;
  return (
    <Stack justify="center" align="center">
      {uuidGroup &&
        uuidGroup.map((uuid, i) => {
          return (
            <Container key={i}>
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
            </Container>
          );
        })}
      <PageBar page={page} setPage={setPage} total={total} />
      {/* <CompleteModal
              title="주문취소가 완료되었습니다."
              isOpen={open}
              onClose={() => setOpen(!open)}
              setOpen={setOpen}
            /> */}
    </Stack>
  );
}

export default MypageOrderhistoryPage;
