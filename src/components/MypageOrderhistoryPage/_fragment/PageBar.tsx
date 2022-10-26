import React, { Dispatch, SetStateAction, useState } from 'react';

import { Button, ChakraProps, Flex, HStack } from '@chakra-ui/react';

import { ListArrowLeft, ListArrowRight } from '@components/common/@Icons/UI';

interface PageBarInterface extends ChakraProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  total: number[];
  max: number;
}

const PageBar = ({
  page,
  setPage,
  total,
  max,
  ...basisProps
}: PageBarInterface) => {
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
      {total.map((v, i) => {
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
        disabled={page === Math.ceil(max / 4)}
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
