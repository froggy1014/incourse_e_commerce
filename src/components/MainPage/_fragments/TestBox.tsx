import React from 'react';

import { Box } from '@chakra-ui/react';

interface TestBoxType {
  title: string;
}
const TestBox = (props: TestBoxType) => {
  const title = props.title;
  return (
    <>
      <Box w="100%" h="300px" bg="beige">
        {title}
      </Box>
    </>
  );
};

export default TestBox;
