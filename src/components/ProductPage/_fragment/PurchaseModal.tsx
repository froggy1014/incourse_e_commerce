import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { getCookie } from 'cookies-next';

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerProps,
  Flex,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

import { decProduct, incProduct } from '@features/pg/pgSlice';

import { QtyMinusIcon, QtyPlusIcon } from '@icons/index';

import { SubmitButton } from '@shareComponents/index';
import { axiosInstance } from '@utils/axios';
import { intComma } from '@utils/format';

interface DrawerExampleProps extends DrawerProps {}

function PurchaseModal(props: Omit<DrawerExampleProps, 'children'>) {
  const dispatch = useDispatch();
  const { id, count, price, name, total } = useSelector(
    (state: RootStateOrAny) => state.products,
  );

  const handleCart = async () => {
    const data = {
      productId: id,
      cartId: getCookie('cartId'),
      count: count,
    };
    axiosInstance.post('cart/item/', data).then((res) => console.log(res));
    props.onClose();
  };

  return (
    <Box position="relative">
      <Drawer placement="bottom" {...props}>
        <DrawerOverlay />
        <DrawerContent roundedTop="10px">
          <DrawerBody px="16px" py="20px">
            <VStack w="100%" h="80px" bg="gray.200" p="10px">
              <Text w="100%" text-align="left" variant="normal16gray">
                {name}
              </Text>
              <HStack w="100%" justify="space-between">
                <HStack rounded="5px" spacing="1px">
                  <Box onClick={() => dispatch(decProduct())}>
                    <QtyMinusIcon />
                  </Box>
                  <Text
                    w="25px"
                    h="25px"
                    textAlign="center"
                    bg="white"
                    color="gray.800"
                  >
                    {count}
                  </Text>
                  <Box onClick={() => dispatch(incProduct())}>
                    <QtyPlusIcon />
                  </Box>
                </HStack>
                <Text variant="bold16gray" color="gray.600">
                  {intComma(total)}원
                </Text>
              </HStack>
            </VStack>
            <HStack justify="space-between">
              <HStack>
                <Text variant="normal16">총 수량</Text>
                <Text variant="bold20commerse">{count}</Text>
                <Text variant="normal16">개</Text>
              </HStack>
              <HStack>
                <Text variant="normal16">합계</Text>
                <Text variant="bold16">{intComma(total)}원</Text>
              </HStack>
            </HStack>
            <Flex justify="space-between">
              <SubmitButton
                title="장바구니"
                variant="btnwhite"
                size="btnsm"
                w="165px"
                mb="10px"
                onClick={handleCart}
              ></SubmitButton>
              <SubmitButton
                title="바로구매"
                variant="btncommerse"
                size="btnsm"
                w="165px"
                mb="10px"
              ></SubmitButton>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default PurchaseModal;
