import React, { useRef, useState } from 'react';

import { Box, BoxProps, Button, Image, Text } from '@chakra-ui/react';

import { DownVerticalArrow, UpVerticalArrow } from '@icons/index';

interface DetailSectionOne extends BoxProps {
  detail: string;
}

const DetailSection1 = ({ detail, ...basisProps }: DetailSectionOne) => {
  const [viewMore, setViewMore] = useState(false);
  const str = detail.split('"')[3];
  return (
    <Box position="relative">
      <Image
        src={str}
        alt="DetailImage"
        objectFit="cover"
        w="100%"
        h={viewMore ? 'auto' : '567px'}
        pb={viewMore ? '80px' : 'null'}
        bg={viewMore ? 'gray.100' : 'null'}
      />
      <Button
        position="absolute"
        top={viewMore ? '' : '527px'}
        bottom={viewMore ? '0px' : ''}
        w="100%"
        bg="white"
        border={'1px solid black'}
        rounded={'50px'}
        onClick={() => setViewMore(!viewMore)}
      >
        {viewMore ? (
          <Text variant="bold16">
            상세정보 접기 <UpVerticalArrow />
          </Text>
        ) : (
          <Text variant="bold16">
            상세정보 펼쳐보기 <DownVerticalArrow />
          </Text>
        )}
      </Button>
    </Box>
  );
};

export default DetailSection1;
