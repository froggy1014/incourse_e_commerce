import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';

import CartIcon from '@components/common/@Icons/System/Cart';
import ExitIcon from '@components/common/@Icons/System/Exit';
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
        <DrawerContent w="313px" maxW="313px" fontSize="20px">
          <DrawerCloseButton mt="2" />
          <DrawerBody py="0">
            <VStack
              mt="80px"
              divider={<Divider />}
              spacing="4"
              align="start"
              fontWeight="bold"
            >
              <Text>카테고리</Text>
              <Text fontSize="16px">홈</Text>
              <Text fontSize="16px">상품보기</Text>
              <Text fontSize="16px">마이페이지</Text>
            </VStack>
            <Divider mt="4" />
          </DrawerBody>
          <DrawerFooter display="block" px="0">
            <Button bg="transparent" fontSize="20">
              <ExitIcon />
              <Text ml="5px">로그아웃</Text>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MainHeader;
