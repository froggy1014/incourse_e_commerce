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
import { getQueryString } from '@utils/format';

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
  const queryString = getQueryString(meinfo);
  return (
    <Box mt="70px" {...basisProps}>
      <Stack divider={<Divider w="100%" h="10px" bg="gray.100" />}>
        <Box mb="30px">
          <Text variant={'bold20'}>{meinfo.name}</Text>
          <Text color={'gray.400'}>{meinfo.email}</Text>
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
