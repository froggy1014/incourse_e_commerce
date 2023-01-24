import Image from 'next/image';
import React, { useState } from 'react';

import { Box, BoxProps, Button, Text } from '@chakra-ui/react';

import { DownVerticalArrow, UpVerticalArrow } from '@icons/index';

interface DetailSectionOne extends BoxProps {
  detail: string;
}

const DetailSection1 = ({ detail, ...basisProps }: DetailSectionOne) => {
  const [viewMore, setViewMore] = useState(false);
  const detailImage = detail.split('"')[3];
  const [imgSrc, setImgSrc] = useState(detailImage);
  return (
    <Box position="relative">
      <Image
        src={`/images/DetailImage.png`}
        alt="DetailImage"
        objectFit="cover"
        width="345px"
        height={viewMore ? '3000px' : '567px'}
        onError={() => {
          setImgSrc(`/images/DetailImage.png`);
        }}
      />
      <Button
        position="absolute"
        left={'0px'}
        bottom={'0px'}
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
