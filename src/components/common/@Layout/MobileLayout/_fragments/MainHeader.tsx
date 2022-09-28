import { useRouter } from 'next/dist/client/router';

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

import { ROUTES } from '@constants/routes';

type MainHeaderType = { px?: string };

const MainHeader = ({ px }: MainHeaderType) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();
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
          <DrawerCloseButton mt="2" />
          <DrawerBody py="0">
            <VStack
              mt="80px"
              divider={<Divider />}
              spacing="4"
              align="start"
              fontWeight="bold"
            >
              <Text fontSize={'20px'}>카테고리</Text>
              <Text cursor="pointer" onClick={() => router.push(ROUTES.MAIN)}>
                홈
              </Text>
              <Text
                cursor="pointer"
                onClick={() => router.push(ROUTES.PRODUCT)}
              >
                상품보기
              </Text>
              <Text
                cursor="pointer"
                onClick={() => router.push(ROUTES.MYPAGE.MAIN)}
              >
                마이페이지
              </Text>
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
