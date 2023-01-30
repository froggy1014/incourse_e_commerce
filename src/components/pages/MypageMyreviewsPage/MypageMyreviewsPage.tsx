import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { getCookie } from 'cookies-next';

import { Box, ChakraProps, Divider, Stack, Text } from '@chakra-ui/react';

import { getMyReviews } from '@apis/_axios/get/axiosGet';

import PageBar from '@components/pages/MypageOrderhistoryPage/_fragment/PageBar';

import { QUERY_KEY } from '@constants/query-keys';
import { Loading } from '@shareComponents/index';

import { IMyReviews } from './MyReviews';
import EmptyReview from './_fragments/EmptyReview';
import MyReviewCard from './_fragments/MyReviewCard';

interface MypageMyreviewsPageProps extends ChakraProps {}

function MypageMyreviewsPage({ ...basisProps }: MypageMyreviewsPageProps) {
  const userId = getCookie('userId');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState<number>(0);

  const { data: pageInfo, isLoading } = useQuery(
    [QUERY_KEY.MYREVIEWS, page],
    () => getMyReviews(page, String(userId)),
    { keepPreviousData: true },
  );

  useEffect(() => {
    if (pageInfo) setTotal(Math.ceil(pageInfo.count / 4));
  }, [pageInfo]);

  if (isLoading) return <Loading />;

  console.log(pageInfo);

  if (pageInfo.count === 0) return <EmptyReview />;

  return (
    <Box {...basisProps}>
      <Text variant="pageTitle">내 상품 리뷰</Text>
      <Text variant="bold16" mb="30px">
        총{' '}
        <Box as="span" color="commerse.500">
          {pageInfo?.count}
        </Box>
        건
      </Text>
      <Stack divider={<Divider />}>
        {pageInfo?.results.map((review: IMyReviews) => {
          return <MyReviewCard key={review.id} review={review} />;
        })}
        <PageBar page={page} setPage={setPage} total={total} />
      </Stack>
    </Box>
  );
}

export default MypageMyreviewsPage;
