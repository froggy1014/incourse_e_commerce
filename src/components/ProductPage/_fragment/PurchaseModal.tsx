import React, { useEffect, useState } from 'react';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  DrawerProps,
} from '@chakra-ui/react';

interface DrawerExampleProps extends DrawerProps {}

function PurchaseModal(props: Omit<DrawerExampleProps, 'children'>) {
  return (
    <Drawer placement="bottom" {...props}>
      <DrawerOverlay />
      <DrawerContent roundedTop="10px">
        <DrawerBody px="16px" py="20px">
          <h1>Test</h1>
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
