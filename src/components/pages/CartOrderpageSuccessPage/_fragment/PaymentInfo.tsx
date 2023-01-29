import Link from 'next/link';
import React from 'react';

import { IPatchOrder } from '@types';

import { Box, Divider, Flex, HStack, Stack, Text } from '@chakra-ui/react';

import { SubmitButton } from '@components/common/@shareComponents';

import { ROUTES } from '@constants/routes';
import { intComma } from '@utils/format';

export function PaymentInfo({ orderedInfo }: { orderedInfo: IPatchOrder }) {
  return (
    <Box>
      <Stack h="auto" spacing="4" mt="4">
        <Text fontWeight="bold">결제정보</Text>
        <Divider variant="fullthin" />
        <Stack>
          <HStack color="gray.600" justify="space-between">
            <Text>총 상품금액</Text>
            <Text>{intComma(orderedInfo.price)} 원</Text>
          </HStack>
          <HStack color="gray.600" justify="space-between">
            <Text>총 배송비</Text>
            <Text>{intComma(orderedInfo.shippingPrice)} 원</Text>
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
          <Text variant="boldcommerse">{intComma(orderedInfo.amount)} 원</Text>
        </HStack>
        <Flex justify="space-between" pt="34px">
          <Link href="/" replace>
            <a>
              <SubmitButton
                title="메인화면 이동"
                size="btnsm"
                variant="btnwhite"
                w="165px"
              />
            </a>
          </Link>
          <Link href={ROUTES.MYPAGE.ORDERHISTORY} replace>
            <a>
              <SubmitButton
                title="주문내역 이동"
                size="btnsm"
                variant="btncommerse"
                w="165px"
              />
            </a>
          </Link>
        </Flex>
      </Stack>
    </Box>
  );
}
