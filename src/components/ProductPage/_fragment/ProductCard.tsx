import React from 'react';

import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

import { SubmitButton } from '@components/common';

import { RatingIcon } from 'generated/icons/RatingIcon';

const ProductCard = () => {
  return (
    <Box
      w="100%"
      h="528px"
      rounded="20px"
      boxShadow="0px 0px 10px 0px #1A1A1A1A"
    >
      <Image
        objectFit="cover"
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdNvtmQ%2FbtrMVG0Mmfq%2FFt80eqvk8rOyqvlFmacn00%2Fimg.png"
        alt="product1"
      />
      <Box w="310px" h="278px" mx="16px">
        <Flex direction="column" w="100%" h="100%" justify="space-between">
          <HStack mt="30px" spacing="1" ml="15px">
            <Text variant="bold16">바스&샴푸</Text>
            <Text variant="normal16gray">300ml</Text>
          </HStack>
          <VStack spacing="1" align="start" mb="10px" ml="15px">
            <HStack spacing="0">
              <Text variant="bold16" color="commerse.500">
                27,000
              </Text>
              <Text variant="normal16">원</Text>
            </HStack>
            <HStack spacing="1">
              <RatingIcon />
              <Text variant="bold16">4.3</Text>
              <Text variant="normal16gray">(리뷰 125개)</Text>
            </HStack>
          </VStack>
          <HStack justify="center" spacing="3">
            <Text variant="normal16gray"># 올인원</Text>
            <Text variant="normal16gray"># 클렌져</Text>
            <Text variant="normal16gray"># 마일드</Text>
            <Text variant="normal16gray"># 바스앤샴푸</Text>
          </HStack>
          <Flex justify="space-between">
            <SubmitButton
              title="바로구매"
              variant="btncommerse"
              sizes="btnsm"
            ></SubmitButton>
            <SubmitButton
              title="장바구니"
              variant="btnwhite"
              sizes="btnsm"
            ></SubmitButton>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
