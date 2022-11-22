import Link from 'next/link';
import { useState } from 'react';

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

import LogoutModal from '@components/MypagePage/_fragment/LogoutModal';
import { CartIcon, ExitIcon, Logo, MenuIcon } from '@icons/index';

import { ROUTES } from '@constants/routes';

type MainHeaderType = { px?: string };

export const MainHeader = ({ px }: MainHeaderType) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Flex
        w="100%"
        h="80px"
        bg="rgba(255, 255, 255, 0.3)"
        justify="space-between"
        align="center"
        position="fixed"
        top="0"
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
        <Link href="/cart">
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
              <Link href={ROUTES.MAIN}>
                <a>홈</a>
              </Link>
              <Link href={ROUTES.PRODUCT}>
                <a>상품보기</a>
              </Link>
              <Link href={ROUTES.MYPAGE.MAIN}>
                <a>마이페이지</a>
              </Link>
            </VStack>
            <Divider mt="4" />
          </DrawerBody>
          <DrawerFooter display="block" px="0">
            <Button
              bg="transparent"
              fontSize="20"
              onClick={() => setOpen(!open)}
            >
              <ExitIcon />
              <Text ml="5px">로그아웃</Text>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <LogoutModal isOpen={open} onClose={() => setOpen(!open)} />
    </>
  );
};
