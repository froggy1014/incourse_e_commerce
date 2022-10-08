import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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

interface MypagePageProps extends ChakraProps {
  meinfo: {
    id: number;
    name: string;
    nickname: string;
    phone: string;
    address: string;
    email: string;
    profile: string;
    gender: string;
    age: number;
  };
}

function MypagePage({ meinfo, ...basisProps }: MypagePageProps) {
  const router = useRouter();
  const { id, name, nickname, phone, address, email, profile, gender, age } =
    meinfo;
  console.log(profile);
  return (
    <Box mt="70px" {...basisProps}>
      <Stack divider={<Divider w="100%" h="10px" bg="gray.100" />}>
        <Box mb="30px">
          <Text variant={'bold20'}>{name}</Text>
          <Text color={'gray.400'}>{email}</Text>
        </Box>
        <HStack w="100%" justify={'space-between'} py="36px">
          <Link
            href={`/mypage/modifyprofile?name=${name}&nickname=${nickname}&phone=${phone}&email=${email}&profile=${profile}&gender=${gender}&age=${age}&id=${id}`}
          >
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
          <HStack
            w="100%"
            justify={'space-between'}
            h="60px"
            onClick={() => router.push(ROUTES.MYPAGE.WITHDRAWAL)}
          >
            <Text>회원탈퇴</Text>
            <ListArrowRight />
          </HStack>
          <Divider w="100%" m="0px" />
          <HStack
            w="100%"
            justify={'space-between'}
            h="60px"
            onClick={() => router.push(ROUTES.LOGIN)}
          >
            <Text>로그아웃</Text>
            <ListArrowRight />
          </HStack>
          <Box w="100%" bg="gray.100" h="30px"></Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default MypagePage;
