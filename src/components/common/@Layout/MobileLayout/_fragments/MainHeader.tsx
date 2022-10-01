import Link from 'next/link';

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
import { Logo } from '@icons/UI';

type MainHeaderType = { px?: string };

const MainHeader = ({ px }: MainHeaderType) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Flex
        w="100%"
        h="80px"
        justify="space-between"
        align="center"
        position="fixed"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        boxSizing="border-box"
        maxW="375px"
        px={`${px} | '0px' `}
        zIndex="99"
      >
        <IconButton
          onClick={onOpen}
          aria-label="MenuIcon"
          icon={<MenuIcon />}
          bg="transparent"
        />
        <Logo size="sm" />
        <Link href="/">
          <IconButton
            aria-label="CartIcon"
            icon={<CartIcon />}
            bg="transparent"
          />
        </Link>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent w="313px" maxW="313px">
          <DrawerCloseButton
            mt="2"
            _focus={{
              bg: 'none',
            }}
            _hover={{
              bg: 'none',
            }}
          />
          <DrawerBody py="0">
            <VStack
              mt="80px"
              divider={<Divider />}
              spacing="4"
              align="start"
              fontWeight="bold"
            >
              <Text fontSize={'20px'}>카테고리</Text>
              <Link href="/">
                <a>홈</a>
              </Link>
              <Link href="/product">
                <a>상품보기</a>
              </Link>
              <Link href="/mypage">
                <a>마이페이지</a>
              </Link>
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
