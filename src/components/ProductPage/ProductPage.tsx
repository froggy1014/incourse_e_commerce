import React, { useCallback, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Box, HStack, Spinner, useDisclosure } from '@chakra-ui/react';

import { getProduct } from '@utils/axios';

import ProductCard from './_fragment/ProductCard';
import PurchaseModal from './_fragment/PurchaseModal';
import { ProductPageType } from './data';

function ProductPage({ ...props }: ProductPageType) {
  //** 모달창 컨트롤을 위한 useDisclosure 훅 from Chakra UI */
  const { isOpen, onOpen, onClose } = useDisclosure();
  //** useInfiteQuery를 통해 scroll to fetch 구현 */
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery<any, Error>(['ProductList'], getProduct, {
    getNextPageParam: (lastPage, pages) => lastPage.cursor,
  });

  /** 무한 스크롤 구현 코드 feat. observer */

  // 타겟 엘리먼트
  const observer = useRef<IntersectionObserver>();
  // 타겟 엘리먼트가 인터섹션시 콜백
  const lastElementRef = useCallback(
    (node) => {
      //** 이미 fetch 중이라면  return*/
      if (isLoading) return;

      // 타겟 엘리먼트의 가시성 변화를 더 이상 감지하지 않는다.
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        // callback으로부터 받은 entries 배열에서 isIntersecting 노출 여부와
        // 다음 페이지가 있는지 확인을 하면 다음 페이지 fetchNextPage
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      // 마지막 엘리먼트가 맞다면 계속 관찬하게끔 유지
      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage],
  );

  /* -------------------------------------- */

  return (
    <>
      <Box>
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.results.map((result: any, i: number) => {
              if (page.results.length === i + 1) {
                return (
                  <Box key={result.id} ref={lastElementRef}>
                    <ProductCard product={result} onOpen={onOpen} />
                  </Box>
                );
              } else {
                return (
                  <Box key={result.id}>
                    <ProductCard
                      key={result.id}
                      product={result}
                      onOpen={onOpen}
                    />
                  </Box>
                );
              }
            })}
          </React.Fragment>
        ))}
        {/** Fetch 진행 시 스피너  */}
        {isFetching && !isFetchingNextPage ? (
          <HStack w="100%" h="100%" justify="center">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="commerse.500"
              size="xl"
            />
          </HStack>
        ) : null}
        {/** PG 모달 컴포넌트 */}
        <PurchaseModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </>
  );
}

export default ProductPage;
