import React from 'react';

import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';

import { DownVerticalArrow } from 'generated/icons/DownVerticalArrow';
import { UpVerticalArrow } from 'generated/icons/UpVerticalArrow';

const DetailSection2 = () => {
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  return (
    <>
      <Button id="PurchaseInfo" {...buttonProps} w="100%" rounded={'0px'} p="0">
        <HStack justify="space-between" w="100%">
          <Text variant="bold16">주문 및 배송 안내</Text>
          {disclosureProps.hidden ? <DownVerticalArrow /> : <UpVerticalArrow />}
        </HStack>
      </Button>
      <VStack {...disclosureProps} bg="gray.100" align="start" py="30px">
        <Text variant="bold16">[주문 및 배송 안내] </Text>
        <Text>배송방법 : 인코스런 택배 </Text>
        <Text>배송지역 : 전국 </Text>
        <VStack align="start" spacing="0px">
          <Text>배송비용 : 단품 상품 구매 시 3,000배송비 발생</Text>
          <HStack>
            <Box minW="60px"></Box>
            <Text>
              그외 단품 묶음 구매의 경우 30,000원 이상 구매 시 무료배송
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default DetailSection2;
