import React, { Dispatch, SetStateAction } from 'react';

import { Button, ChakraProps, HStack } from '@chakra-ui/react';

import { ListArrowLeft, ListArrowRight } from '@components/common/@Icons/UI';

interface PageBarInterface extends ChakraProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  total: number[];
}

const PageBar = ({ page, setPage, total, ...basisProps }: PageBarInterface) => {
  return (
    <HStack p="50px" justify="space-between" align="center" {...basisProps}>
      <Button
        bg="white"
        disabled={page === 1}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        <ListArrowLeft />
      </Button>
      <HStack>
        {total.map((_v, i) => {
          return (
            <Button
              fontSize="16px"
              key={i}
              isActive={page === i + 1}
              bg="white"
              color="gray.400"
              _active={{ color: 'black', bg: 'white' }}
              onClick={() => {
                setPage(i + 1);
              }}
            >
              {i + 1}
            </Button>
          );
        })}
      </HStack>
      <Button
        bg="white"
        disabled={page === total.length}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        <ListArrowRight />
      </Button>
    </HStack>
  );
};

export default PageBar;
