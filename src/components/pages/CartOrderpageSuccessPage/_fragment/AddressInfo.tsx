import { IPatchOrder } from '@types';

import { Box, Divider, HStack, Stack, Text } from '@chakra-ui/react';

import { addHyphenPhone } from '@utils/format';

export function AddressInfo({ orderedInfo }: { orderedInfo: IPatchOrder }) {
  return (
    <Box py="10px">
      <Text fontWeight="bold">배송지정보</Text>
      <Divider variant="fullthin" my="10px" />
      <HStack>
        <Stack>
          <HStack justify="flex-start">
            <Text minW="92px">이름</Text>
            <Text color="gray.700">{orderedInfo.shipName}</Text>
          </HStack>
          <HStack justify="flex-start">
            <Text minW="92px">핸드폰 번호</Text>
            <Text color="gray.700">
              {addHyphenPhone(String(orderedInfo.shipPhone))}
            </Text>
          </HStack>
          <HStack justify="flex-start">
            <Text minW="92px">우편번호</Text>
            <Text color="gray.700">{orderedInfo.userAddrPost}</Text>
          </HStack>
          <HStack justify="flex-start">
            <Text minW="92px">주소</Text>
            <Text color="gray.700">
              {orderedInfo.shipAddr + ' ' + orderedInfo.userAddrDetail}
            </Text>
          </HStack>
          <HStack justify="flex-start">
            <Text minW="92px">배송요청사항</Text>
            <Text color="gray.700">{orderedInfo.orderMessage}</Text>
          </HStack>
        </Stack>
      </HStack>
    </Box>
  );
}
