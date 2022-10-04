import { useRouter } from 'next/dist/client/router';
import React, { Dispatch, SetStateAction } from 'react';

import { Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';

import { SubmitButton } from '@components/common';
import { RatingIcon } from '@icons/UI';

import { ROUTES } from '@constants/routes';

import { dataType } from '../data';

type Purchase = [string, number, number];
interface productInfo {
  setPurchase: Dispatch<SetStateAction<Purchase>>;
  onOpen: () => void;
  product: dataType;
}

const ProductCard = ({
  onOpen,
  setPurchase,
  product,
  ...props
}: productInfo) => {
  const router = useRouter();
  const { id, thumbnail, name, capacity, price, avgRate, reviewCount, tags } =
    product;

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
      <Box onClick={() => router.push(`${ROUTES.PRODUCT}/${id}`)}>
        <Image objectFit="cover" src={thumbnail} alt="product1" />
        <Flex
          direction="column"
          w="100%"
          h="178px"
          mx="30px"
          mb="20px"
          justify="space-between"
        >
          <HStack mt="30px" spacing="1">
            <Text variant="bold16">{name}</Text>
            <Text variant="normal16gray">{capacity}ml</Text>
          </HStack>
          <VStack spacing="1" align="start" mb="10px">
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
          <HStack spacing="2">
            {tags.map((tag) => {
              return (
                <Text key={tag.id} variant="normal16gray">
                  # {tag.name}
                </Text>
              );
            })}
          </HStack>
        </Flex>
      </Box>
      <Flex justify="space-evenly" onClick={handleClick}>
        <SubmitButton
          title="바로구매"
          variant="btncommerse"
          size="btnsm"
        ></SubmitButton>
        <SubmitButton
          title="장바구니"
          variant="btnwhite"
          size="btnsm"
        ></SubmitButton>
      </Flex>
    </Box>
  );
};

export default ProductCard;
