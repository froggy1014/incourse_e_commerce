import React, { Dispatch, SetStateAction } from 'react';

import { Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';

import { SubmitButton } from '@components/common';

import { RatingIcon } from 'generated/icons/RatingIcon';

type Purchase = [string, number, string];
interface productInfo {
  setPurchase: Dispatch<SetStateAction<Purchase>>;
  onOpen: () => void;
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    capacity: number;
    tags: string[];
    avgRate: string;
    reviewCount: string;
    created: string;
    imgurl: string;
  };
}

const ProductCard = ({ onOpen, setPurchase, ...props }: productInfo) => {
  const { id, imgurl, name, capacity, price, avgRate, reviewCount, tags } =
    props.product;

  const handleClick = () => {
    setPurchase([name, price, id]);
    onOpen();
  };
  return (
    <Box
      w="100%"
      h="528px"
      mt="30px"
      rounded="20px"
      boxShadow="0px 0px 10px 0px #1A1A1A1A"
    >
      <Image objectFit="cover" src={imgurl} alt="product1" />
      <Box w="310px" h="278px" mx="16px">
        <Flex direction="column" w="100%" h="100%" justify="space-between">
          <HStack mt="30px" spacing="1" ml="15px">
            <Text variant="bold16">{name}</Text>
            <Text variant="normal16gray">{capacity}ml</Text>
          </HStack>
          <VStack spacing="1" align="start" mb="10px" ml="15px">
            <HStack spacing="0">
              <Text variant="bold16" color="commerse.500">
                {price}
              </Text>
              <Text variant="normal16">원</Text>
            </HStack>
            <HStack spacing="1">
              <RatingIcon />
              <Text variant="bold16">{avgRate}</Text>
              <Text variant="normal16gray">(리뷰 {reviewCount}개)</Text>
            </HStack>
          </VStack>
          <HStack justify="center" spacing="2">
            {tags.map((tag, i) => {
              return (
                <Text key={i} variant="normal16gray">
                  # {tag}
                </Text>
              );
            })}
          </HStack>
          <Flex justify="space-between">
            <SubmitButton
              title="바로구매"
              variant="btncommerse"
              sizes="btnsm"
              onClick={handleClick}
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
