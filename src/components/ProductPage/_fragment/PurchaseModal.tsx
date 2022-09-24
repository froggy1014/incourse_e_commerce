import React, { useEffect, useState } from 'react';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  DrawerProps,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

interface PurchaseInfo {
  price: number;
}

interface DrawerExampleProps extends DrawerProps {}
interface DrawerExampleProps extends PurchaseInfo {}

function PurchaseModal(props: Omit<DrawerExampleProps, 'children'>) {
  const [state, setState] = useState({
    count: 1,
    price: 0,
  });

  useEffect(() => {
    setState((state) => {
      return { ...state, price: props.price };
    });
  }, [props.price]);

  return (
    <Drawer placement="bottom" {...props}>
      <DrawerOverlay />
      <DrawerContent roundedTop="10px">
        <DrawerBody px="16px" py="20px">
          <VStack w="100%" h="80px" bg="gray.200">
            <HStack>바스 & 샴푸</HStack>
            <HStack>
              <HStack></HStack>
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
              <Text variant="bold16">{state.price}원</Text>
            </HStack>
          </HStack>
          <HStack></HStack>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={props.onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default PurchaseModal;
