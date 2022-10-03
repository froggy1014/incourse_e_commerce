import { useRouter } from 'next/router';
import React from 'react';

import {
  Box,
  Button,
  ChakraProps,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import { SubmitButton } from '@components/common';

import { ROUTES } from '@constants/routes';
import { intComma } from '@utils/format';

interface CartOrderpageSuccessPageProps extends ChakraProps {}

function CartOrderpageSuccessPage({
  ...basisProps
}: CartOrderpageSuccessPageProps) {
  const router = useRouter();
  return (
    <Stack {...basisProps}>
      <Text variant="pageTitle">결제내역</Text>

      <Stack divider={<Divider variant="fullthick" />}>
        <Stack>
          <Divider variant="fullthin" />
          <Text fontWeight="bold" py="10px">
            [2021 - 04 - 01]
          </Text>
          <Divider variant="fullthin" />
          <HStack justify="space-between">
            <HStack>
              <Image
                boxSize="60px"
                src="/images/orderHistory.png"
                bg="gray.100"
                rounded="5px"
              />
              <Box>
                <Text fontWeight="bold">샴푸 & 바디</Text>
                <Text variant="normal12gray">샴푸 & 바디 | 300ml</Text>
                <Text variant="boldcommerse">27,000원 / 1개</Text>
              </Box>
            </HStack>
            <Text variant="boldcommerse">결제완료</Text>
          </HStack>
        </Stack>
        <Box py="14px">
          <Text fontWeight="bold">배송지정보</Text>
          <HStack>
            <Stack>
              <HStack justify="flex-start">
                <Text minW="92px">이름</Text>
                <Text color="gray.700">김인코스런</Text>
              </HStack>
              <HStack justify="flex-start">
                <Text minW="92px">핸드폰 번호</Text>
                <Text color="gray.700">010-1234-1234</Text>
              </HStack>
              <HStack justify="flex-start">
                <Text minW="92px">우편번호</Text>
                <Text color="gray.700">31125</Text>
              </HStack>
              <HStack justify="flex-start">
                <Text minW="92px">주소</Text>
                <Text color="gray.700">
                  서울특별시 마포구 성산동 123-3 성산빌딩 B동 302호
                </Text>
              </HStack>
              <HStack justify="flex-start">
                <Text minW="92px">배송요청사항</Text>
                <Text color="gray.700">문앞에 두고 가주세요</Text>
              </HStack>
            </Stack>
          </HStack>
        </Box>
        <Box>
          <Stack h="auto" spacing="4" mt="4">
            <Text fontWeight="bold">결제정보</Text>
            <Divider variant="fullthin" />
            <Stack>
              <HStack color="gray.600" justify="space-between">
                <Text>총 상품금액</Text>
                <Text>{intComma(108000)}</Text>
              </HStack>
              <HStack color="gray.600" justify="space-between">
                <Text>총 배송비</Text>
                <Text>{intComma(0)}원</Text>
              </HStack>
              <HStack color="gray.600" justify="space-between">
                <Text>결제수단</Text>
                <Text fontWeight="bold" color="gray.700">
                  신용카드 결제
                </Text>
              </HStack>
            </Stack>
            <Divider variant="fullthin" />
            <HStack justify="space-between">
              <Text>결제금액</Text>
              <Text variant="boldcommerse">{intComma(108000)}원</Text>
            </HStack>
            <Flex justify="space-between" pt="34px">
              <SubmitButton
                title="메인화면 이동"
                size="btnsm"
                variant="btnwhite"
                w="165px"
                onClick={() => router.push(ROUTES.MAIN)}
              />
              <SubmitButton
                title="주문내역 이동"
                size="btnsm"
                variant="btncommerse"
                w="165px"
                onClick={() => router.push(ROUTES.MYPAGE.ORDERHISTORY)}
              />
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

export default CartOrderpageSuccessPage;
