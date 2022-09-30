import React, { useState } from 'react';

import {
  Box,
  Button,
  ChakraProps,
  Checkbox,
  CloseButton,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

import { QtyMinusIcon, QtyPlusIcon } from '@components/common/@Icons/UI';

import { intComma } from '@utils/format';

interface PropsType {
  results: {
    name: string;
    volumn: number;
    price: number;
    count: number;
  };
}

interface CartCardProps extends ChakraProps {}
interface CartCardProps extends PropsType {}

function CartCard({ results, ...basisProps }: CartCardProps) {
  const { name, volumn, price, count } = results;
  const [state, setState] = useState({
    count: count,
    price: price,
  });

  const minusFunc = () => {
    if (state.count !== 1) {
      setState((state) => {
        return { count: state.count - 1, price: state.price - price };
      });
    }
  };
  return (
    <HStack align="flex-start" justify="space-evenly">
      <Checkbox size="sm" colorScheme="commerse"></Checkbox>
      <Stack w="100%">
        <HStack>
          <Stack w="100%">
            <HStack justify="space-between" position="relative">
              <HStack>
                <Image
                  boxSize="60px"
                  src="/images/orderHistory.png"
                  bg="gray.100"
                  rounded="5px"
                />
                <Box>
                  <Text fontWeight="bold">{name}</Text>
                  <Text variant="normal12gray">
                    {name} | {volumn}ml
                  </Text>
                  <Text variant="boldcommerse">{intComma(price)}원</Text>
                </Box>
              </HStack>
              <CloseButton position="absolute" top="-5px" right="0" />
            </HStack>
          </Stack>
        </HStack>
        <Stack w="100%" h="80px" bg="gray.200" p="10px">
          <Text w="100%" text-align="left" variant="normal16gray">
            {name}
          </Text>
          <HStack w="100%" justify="space-between">
            <HStack rounded="5px" spacing="1px">
              <Box onClick={() => minusFunc()}>
                <QtyMinusIcon />
              </Box>
              <Text
                w="25px"
                h="25px"
                textAlign="center"
                bg="white"
                color="gray.800"
              >
                {state.count}
              </Text>
              <Box
                onClick={() =>
                  setState((state) => {
                    return {
                      count: state.count + 1,
                      price: state.price + price,
                    };
                  })
                }
              >
                <QtyPlusIcon />
              </Box>
            </HStack>
            <Text variant="bold16gray" color="gray.600">
              {intComma(state.price)}원
            </Text>
          </HStack>
        </Stack>
        <HStack w="100%" justify="space-between" py="10px">
          <Text>{state.price >= 30000 ? '배송비무료' : '배송비 2500원'}</Text>
          <Text variant="boldcommerse">{intComma(state.price)}원</Text>
        </HStack>
      </Stack>
    </HStack>
  );
}

export default CartCard;
