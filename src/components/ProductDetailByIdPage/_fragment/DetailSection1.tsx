import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import { Box, Button, Image, Text, useDisclosure } from '@chakra-ui/react';

import { DownVerticalArrow } from 'generated/icons/DownVerticalArrow';
import { UpVerticalArrow } from 'generated/icons/UpVerticalArrow';

const DetailSection1 = () => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <Box position="relative" id="DetailInfo">
      <Image
        src="/images/DetailImage.png"
        alt="DetailImage"
        objectFit="cover"
        w="100%"
        h={viewMore ? 'auto' : '567px'}
        pb={viewMore ? '80px' : 'null'}
        bg={viewMore ? 'gray.100' : 'null'}
      />
      <Link to="DetailInfo" spy={true}>
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
      </Link>
    </Box>
  );
};

export default DetailSection1;
