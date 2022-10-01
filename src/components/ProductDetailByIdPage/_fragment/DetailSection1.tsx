import React, { useRef, useState } from 'react';

import { Box, BoxProps, Button, Image, Text } from '@chakra-ui/react';

import { DownVerticalArrow, UpVerticalArrow } from '@icons/UI';

interface DetailSectionOne extends BoxProps {}

const DetailSection1 = ({ ...basisProps }: DetailSectionOne) => {
  const sectionOne = useRef(null);
  const [viewMore, setViewMore] = useState(false);

  return (
    <Box position="relative">
      <Image
        src="/images/DetailImage.png"
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
