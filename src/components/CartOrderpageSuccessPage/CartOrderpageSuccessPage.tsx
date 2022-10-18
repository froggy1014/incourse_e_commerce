import Link from 'next/link';

import {
  Box,
  ChakraProps,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import { Loading, SubmitButton } from '@components/common';

import { addHyphenPhone, formatDateDash, intComma } from '@utils/format';

import { useProductInfoQuery } from './_hook/useProductInfoQuery';

import { IPaidProduct, IUserInfo } from 'pages/orderpage/success';

interface CartOrderpageSuccessPageProps extends ChakraProps {
  userInfo: IUserInfo;
  orderedProduct: IPaidProduct[];
}

function CartOrderpageSuccessPage({
  userInfo,
  orderedProduct,
  ...basisProps
}: CartOrderpageSuccessPageProps) {
  const { data: info, isLoading } = useProductInfoQuery(orderedProduct);

  if (isLoading) return <Loading />;

  console.log(orderedProduct);
  return (
    <Stack {...basisProps}>
      <Text variant="pageTitle">결제내역</Text>

      <Stack divider={<Divider variant="fullthick" />}>
        <Box>
          <Divider variant="fullthin" />
          <Text fontWeight="bold" py="10px">
            {formatDateDash(orderedProduct[0].created)}
          </Text>
          <Divider variant="fullthin" mb="10px" />
          {info?.map((product: any, i: number) => {
            return (
              <Stack key={product.id} mb="10px">
                <HStack justify="space-between">
                  <HStack>
                    <Image
                      boxSize="60px"
                      src="/images/orderHistory.png"
                      bg="gray.100"
                      rounded="5px"
                    />
                    <Box>
                      <Text fontWeight="bold">{product.name}</Text>
                      <Text variant="normal12gray">
                        {product.name} | {product.capacity}ml
                      </Text>
                      <Text variant="boldcommerse">
                        {product.price}원 / {orderedProduct[i].count}개
                      </Text>
                    </Box>
                  </HStack>
                  <Text variant="boldcommerse">결제완료</Text>
                </HStack>
              </Stack>
            );
          })}
        </Box>
        <Box py="10px">
          <Text fontWeight="bold">배송지정보</Text>
          <Divider variant="fullthin" my="10px" />
          <HStack>
            <Stack>
              <HStack justify="flex-start">
                <Text minW="92px">이름</Text>
                <Text color="gray.700">{userInfo.shipName}</Text>
              </HStack>
              <HStack justify="flex-start">
                <Text minW="92px">핸드폰 번호</Text>
                <Text color="gray.700">
                  {addHyphenPhone(String(userInfo.shipPhone))}
                </Text>
              </HStack>
              <HStack justify="flex-start">
                <Text minW="92px">우편번호</Text>
                <Text color="gray.700">{userInfo.userAddrPost}</Text>
              </HStack>
              <HStack justify="flex-start">
                <Text minW="92px">주소</Text>
                <Text color="gray.700">{userInfo.userAddrDetail}</Text>
              </HStack>
              <HStack justify="flex-start">
                <Text minW="92px">배송요청사항</Text>
                <Text color="gray.700">{userInfo.orderMessage}</Text>
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
                <Text>{intComma(userInfo.price)} 원</Text>
              </HStack>
              <HStack color="gray.600" justify="space-between">
                <Text>총 배송비</Text>
                <Text>{intComma(userInfo.shippingPrice)} 원</Text>
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
              <Text variant="boldcommerse">{intComma(userInfo.amount)} 원</Text>
            </HStack>
            <Flex justify="space-between" pt="34px">
              <Link href="/">
                <a>
                  <SubmitButton
                    title="메인화면 이동"
                    size="btnsm"
                    variant="btnwhite"
                    w="165px"
                  />
                </a>
              </Link>
              <Link href="/">
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
      </Stack>
    </Stack>
  );
}

export default CartOrderpageSuccessPage;
