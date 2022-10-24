import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { ChakraProps, Container, Stack, Text } from '@chakra-ui/react';

import { getMyOrders } from '@apis/_axios/axiosReqs';

import { Loading } from '@components/common';

import { divideArraybyuuid } from '@utils/array';
import { formatDateDash } from '@utils/format';

import { IItem } from './OrderHistory';
import HistoryCard from './_fragment/HistoryCard';
import OrderButton from './_fragment/OrderButton';
import PageBar from './_fragment/PageBar';

interface MypageOrderhistoryPageProps extends ChakraProps {}

function MypageOrderhistoryPage({
  ...basisProps
}: MypageOrderhistoryPageProps) {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState<number[]>([]);
  const [uuidGroup, setUuidGroup] = useState<(IItem | undefined)[][]>([]);

  const { data, isLoading } = useQuery(['Orders', page], () =>
    getMyOrders(page),
  );

  useEffect(() => {
    if (data && !total.length) {
      setTotal(Array(Math.ceil(data.count / 4)).fill(0));
    }
    if (data) setUuidGroup(divideArraybyuuid(data.results));
  }, [data]);

  if (isLoading && !uuidGroup) return <Loading />;

  return (
    <Stack justify="center" align="center">
      {uuidGroup.map((uuid, i) => {
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
            {/* <CompleteModal
        title="주문취소가 완료되었습니다."
        isOpen={open}
        onClose={() => setOpen(!open)}
        setOpen={setOpen}
      /> */}
          </Container>
        );
      })}
      <PageBar page={page} setPage={setPage} total={total} />
    </Stack>
  );
}

export default MypageOrderhistoryPage;
