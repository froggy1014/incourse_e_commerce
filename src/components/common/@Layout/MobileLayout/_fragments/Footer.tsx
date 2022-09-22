import React from 'react';

import { Flex, Heading, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      w="375px"
      h="280px"
      bg="gray.800"
      maxW="407px"
      justifyContent="start"
      position="absolute"
      bottom="0"
    >
      <Flex
        h="auto"
        direction="column"
        color="white"
        fontWeight="400"
        fontSize="12px"
        justify="space-around"
        ml="32px"
        mb="25px"
        maxW="375px"
      >
        <Heading fontSize="16px">INCOURSE.RUN</Heading>
        <Flex direction="column" h="58px" justify="space-between">
          <Text>팀명 | 인코스런</Text>
          <Text>구성원 | 홍길동, 홍길동, 홍길동, 홍길동 </Text>
          <Text>이메일 | incourse.run@gmail.com</Text>
        </Flex>
        <Text>ⓒINCOURSE.RUN All Right Reserved.</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
