import { RootStateOrAny, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';

import { focusProduct } from '@features/pg/pgSlice';

import { RatingIcon } from '@components/common/@Icons';
import { SubmitButton } from '@components/common/@shareComponents';

import { intComma } from '@utils/format';

export default function ProductInfo({
  id,
  name,
  description,
  price,
  capacity,
  reviewCount,
  onOpen,
}: {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  reviewCount: string;
  onOpen: () => void;
}) {
  const { sum } = useSelector((state: RootStateOrAny) => state.detailReviews);
  const dispatch = useDispatch();
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      justify="space-between"
      roundedTop="20px"
      boxShadow="0px -10px 10px -8px #1A1A1A1A"
    >
      <Box w="50px" h="5px" rounded="2.5px" bg="gray.200" m="10px auto"></Box>
      <Box mx="15px" mb="15px">
        <HStack mt="20px" spacing="1">
          <Text variant="bold20">{name}</Text>
          <Text variant="normal20gray">{capacity}ml</Text>
        </HStack>
        <VStack spacing="-1" align="start" mb="10px">
          <HStack spacing="0">
            <Text variant="bold20commerse">{intComma(price)}</Text>
            <Text variant="normal20">원</Text>
          </HStack>
          <HStack fontWeight="bold" fontSize="12px" spacing="1">
            <Text>3만원 이상 구매시</Text>
            <Text color="commerse.500">무료배송</Text>
          </HStack>
        </VStack>
        <Text mb="10px">{description}</Text>
        <HStack spacing="1">
          <RatingIcon />
          <Text variant="bold16">{sum}</Text>
          <Text variant="normal16gray">{`(${reviewCount}개 리뷰)`}</Text>
        </HStack>
      </Box>
      <VStack
        mb="30px"
        onClick={() => {
          dispatch(focusProduct([id, price, name]));
          onOpen();
        }}
      >
        <SubmitButton
          title="장바구니"
          variant="btnwhite"
          size="btnlg"
          mb="0px"
        ></SubmitButton>
        <SubmitButton
          title="바로구매"
          variant="btncommerse"
          size="btnlg"
        ></SubmitButton>
      </VStack>
    </Flex>
  );
}
