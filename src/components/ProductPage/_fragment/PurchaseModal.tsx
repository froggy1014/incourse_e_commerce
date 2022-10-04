import React, { useEffect, useState } from 'react';

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

import { SubmitButton } from '@components/common';
import { QtyMinusIcon, QtyPlusIcon } from '@icons/UI';

import { intComma } from '@utils/format';

interface PurchaseInfo {
  purchase: [name: string, price: number, id: number];
}

interface DrawerExampleProps extends DrawerProps {}
interface DrawerExampleProps extends PurchaseInfo {}

function PurchaseModal(props: Omit<DrawerExampleProps, 'children'>) {
  const [name, productPrice, id] = props.purchase;
  const [state, setState] = useState({
    count: 1,
    price: 0,
  });

  const minusFunc = () => {
    if (state.count !== 1) {
      setState((state) => {
        return { count: state.count - 1, price: state.price - productPrice };
      });
    }
  };

  const handleCart = () => {
    console.log(state, id);
  };

  useEffect(() => {
    setState(() => {
      return { count: 1, price: productPrice };
    });
  }, [props.isOpen]);

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
                  <Box onClick={() => minusFunc()}>
                    <QtyMinusIcon />
                  </Box>
                  <Text
                    w="25px"
                    h="25px"
                    textAlign="center"
                    bg="white"
                    color="gray.800"
                  >
                    {state.count}
                  </Text>
                  <Box
                    onClick={() =>
                      setState((state) => {
                        return {
                          count: state.count + 1,
                          price: state.price + productPrice,
                        };
                      })
                    }
                  >
                    <QtyPlusIcon />
                  </Box>
                </HStack>
                <Text variant="bold16gray" color="gray.600">
                  {intComma(state.price)}원
                </Text>
              </HStack>
            </VStack>
            <HStack justify="space-between">
              <HStack>
                <Text variant="normal16">총 수량</Text>
                <Text variant="bold20commerse">{state.count}</Text>
                <Text variant="normal16">개</Text>
              </HStack>
              <HStack>
                <Text variant="normal16">합계</Text>
                <Text variant="bold16">{intComma(state.price)}원</Text>
              </HStack>
            </HStack>
            <Flex justify="space-between">
              <SubmitButton
                title="장바구니"
                variant="btnwhite"
                size="btnsm"
                w="165px"
                mb="10px"
                onClick={() => handleCart()}
              ></SubmitButton>
              <SubmitButton
                title="바로구매"
                variant="btncommerse"
                size="btnsm"
                w="165px"
                mb="10px"
                onClick={() => handleCart()}
              ></SubmitButton>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default PurchaseModal;
