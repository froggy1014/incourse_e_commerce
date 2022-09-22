import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  useDisclosure,
} from '@chakra-ui/react';

import CartIcon from '@components/common/@Icons/System/Cart';
import MenuIcon from '@components/common/@Icons/System/Menu';

import Logo from 'generated/icons/Logo';

const MainHeader = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Flex w="100%" h="80px" justify="space-between" align="center">
        <IconButton
          onClick={onOpen}
          aria-label="MenuIcon"
          icon={<MenuIcon />}
          bg="transparent"
        />
        <Logo size="sm" />
        <IconButton
          // onClick={}
          aria-label="CartIcon"
          icon={<CartIcon />}
          bg="transparent"
        />
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent w="313px" maxW="313px">
          <DrawerCloseButton />
          <DrawerHeader>카테고리</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MainHeader;
