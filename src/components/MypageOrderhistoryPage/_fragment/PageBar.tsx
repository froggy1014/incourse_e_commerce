import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Button, ChakraProps, Flex } from '@chakra-ui/react';

import { ListArrowLeft, ListArrowRight } from '@components/common/@Icons/UI';

interface PageBarInterface extends ChakraProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  total: number;
}

const PageBar = ({ page, setPage, total, ...basisProps }: PageBarInterface) => {
  const [pageNum, setPageNum] = useState<number[]>([]);

  const pagenation = useCallback(
    (total) => {
      const newArr = [];
      if (page > 3 && page < total - 2) {
        for (let i = page - 2; i <= page + 2; i++) newArr.push(i);
      } else if (page <= 3) {
        for (let i = 1; i <= 5; i++) newArr.push(i);
      } else if (page >= total - 2) {
        for (let i = total - 4; i <= total; i++) newArr.push(i);
      }
      return newArr;
    },
    [page],
  );

  useEffect(() => {
    if (total > 5) setPageNum(pagenation(total));
    else setPageNum(Array.from({ length: total }, (_, i) => i + 1));
  }, [page, total]);

  return (
    <Flex px="30px" py="50px" align="center" {...basisProps}>
      <Button
        bg="white"
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        <ListArrowLeft />
      </Button>
      {pageNum.map((v, i) => {
        return (
          <Button
            fontSize="16px"
            key={i}
            isActive={page === v}
            bg="white"
            color="gray.400"
            _active={{ color: 'black', bg: 'white' }}
            onClick={() => {
              setPage(v);
            }}
          >
            {v}
          </Button>
        );
      })}
      <Button
        bg="white"
        disabled={page === total}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        <ListArrowRight />
      </Button>
    </Flex>
  );
};

export default PageBar;
