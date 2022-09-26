import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import { Box, Button, Image, Text, useDisclosure } from '@chakra-ui/react';

import { DownVerticalArrow } from 'generated/icons/DownVerticalArrow';
import { UpVerticalArrow } from 'generated/icons/UpVerticalArrow';

const DetailSection1 = () => {
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  const flag = disclosureProps.hidden;
  return (
    <Box position="relative" id="DetailInfo">
      <Image
        src="/images/DetailImage.png"
        alt="DetailImage"
        objectFit="cover"
        w="100%"
        h={flag ? '567px' : 'auto'}
        pb={flag ? 'null' : '80px'}
        bg={flag ? 'null' : 'gray.100'}
      />
      <Link to="DetailInfo" spy={true}>
        <Button
          {...buttonProps}
          position="absolute"
          top={flag ? '527px' : null}
          bottom={flag ? null : '0px'}
          w="100%"
          bg="white"
          border={'1px solid black'}
          rounded={'50px'}
        >
          {flag ? (
            <Text variant="bold16">
              상세정보 펼쳐보기 <DownVerticalArrow />
            </Text>
          ) : (
            <Text variant="bold16">
              상세정보 접기 <UpVerticalArrow />
            </Text>
          )}
        </Button>
      </Link>
    </Box>
  );
};

export default DetailSection1;
