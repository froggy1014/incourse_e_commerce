import React, { useState } from 'react';
import { useInfiniteQuery } from 'react-query';

import axios from 'axios';
import { getCookie } from 'cookies-next';

import { Box, ChakraProps, Divider, Stack, Text } from '@chakra-ui/react';

import { Loading, MyReviewCard } from '@components/common';

import { QUERY_KEY } from '@constants/query-keys';

import { IMyReviews } from './MyReviews';

interface MypageMyreviewsPageProps extends ChakraProps {}

function MypageMyreviewsPage({ ...basisProps }: MypageMyreviewsPageProps) {
  const user_Id = getCookie('userId');
  const [page, setPage] = useState(1);
  const {
    data: pageInfo,
    isLoading,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
  } = useInfiniteQuery(
    [QUERY_KEY.MYREVIEWS],
    async ({ pageParam = page }) => {
      const res = await axios.get(
        `https://api.commerce.incourse.run/v1/review/?page=${pageParam}&page_size=4&user_id=${user_Id}`,
      );
      return res.data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = page + 1;
        return nextPage;
      },
      getPreviousPageParam: (firstPage, allPages) => {
        const previousPage = page - 1;
        return previousPage;
      },
    },
  );

  if (isLoading) return <Loading />;

  return (
    <Box {...basisProps}>
      <Text variant="pageTitle">내 상품 리뷰</Text>
      <Text variant="bold16" mb="30px">
        총{' '}
        <Box as="span" color="commerse.500">
          {pageInfo?.pages[0].count}
        </Box>
        건
      </Text>
      <Stack divider={<Divider />}>
        {pageInfo?.pages[page - 1].results.map((review: IMyReviews) => {
          return <MyReviewCard key={review.id} review={review} />;
        })}
      </Stack>
    </Box>
  );
}

export default MypageMyreviewsPage;
