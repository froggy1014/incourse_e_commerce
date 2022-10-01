import { useRouter } from 'next/dist/client/router';
import React from 'react';

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

interface MypagePageProps extends ChakraProps {}

function MypagePage({ ...basisProps }: MypagePageProps) {
  const router = useRouter();
  return (
    <Box mt="70px" {...basisProps}>
      <Stack divider={<Divider w="100%" h="10px" bg="gray.100" />}>
        <Box mb="30px">
          <Text variant={'bold20'}>김인코스런</Text>
          <Text color={'gray.400'}>incourse.run@gmail.com</Text>
        </Box>
        <HStack w="100%" justify={'space-between'} py="36px">
          <VStack onClick={() => router.push(ROUTES.MYPAGE.PROFILE)}>
            <UserInfoEditIcon />
            <Text>회원정보수정</Text>
          </VStack>
          <VStack onClick={() => router.push(ROUTES.MYPAGE.ORDERHISTORY)}>
            <OrderListIcon />
            <Text>주문내역</Text>
          </VStack>
          <VStack onClick={() => router.push(ROUTES.MYPAGE.MYREVIEWS)}>
            <MyReviewIcon />
            <Text>내 상품 리뷰</Text>
          </VStack>
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
