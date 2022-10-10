import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { StringIterator } from 'lodash';

import {
  Box,
  ChakraProps,
  Divider,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

import {
  ListArrowRight,
  MyReviewIcon,
  OrderListIcon,
  UserInfoEditIcon,
} from '@icons/UI';

import { ROUTES } from '@constants/routes';
import { getQueryString } from '@utils/format';

import LogoutModal from './_fragment/LogoutModal';

interface DataType {
  address: null | string | undefined;
  age: number | undefined;
  email: string | undefined;
  gender: string | undefined;
  id: number | undefined;
  name: string | undefined;
  nickname: string | undefined;
  phone: string | undefined;
  profile: string | undefined;
}

interface InfoType {
  UserInfo: DataType | undefined;
}

function MypagePage({ UserInfo }: InfoType) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const queryString = getQueryString(UserInfo);
  return (
    <Box mt="70px">
      <Stack divider={<Divider w="100%" h="10px" bg="gray.100" />}>
        <Box mb="30px">
          <Text variant={'bold20'}>{UserInfo?.name}</Text>
          <Text color={'gray.400'}>{UserInfo?.email}</Text>
        </Box>
        <HStack w="100%" justify={'space-between'} py="36px">
          <Link href={`/mypage/modifyprofile?${queryString}`}>
            <VStack cursor="pointer">
              <UserInfoEditIcon />
              <Text>회원정보수정</Text>
            </VStack>
          </Link>
          <Link href="/mypage/orderhistory">
            <VStack cursor="pointer">
              <OrderListIcon />
              <Text>주문내역</Text>
            </VStack>
          </Link>
          <Link href="/mypage/myreviews">
            <VStack cursor="pointer">
              <MyReviewIcon />
              <Text>내 상품 리뷰</Text>
            </VStack>
          </Link>
        </HStack>
        <Stack cursor="pointer">
          <Link href={`/mypage/withdrawal?${queryString}`}>
            <HStack w="100%" justify={'space-between'} h="60px">
              <Text>회원탈퇴</Text>
              <ListArrowRight />
            </HStack>
          </Link>
          <Divider w="100%" m="0px" />
          <HStack
            w="100%"
            justify={'space-between'}
            h="60px"
            onClick={() => setOpen(!open)}
          >
            <Text>로그아웃</Text>
            <ListArrowRight />
          </HStack>
          <Box w="100%" bg="gray.100" h="30px"></Box>
        </Stack>
      </Stack>
      <LogoutModal isOpen={open} onClose={() => setOpen(!open)} />
    </Box>
  );
}

export default MypagePage;
