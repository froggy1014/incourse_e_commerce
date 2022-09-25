import React from 'react';

import {
  Box,
  ChakraProps,
  Flex,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';

import { SubmitButton } from '@components/common';

import { RatingIcon } from 'generated/icons/RatingIcon';

interface ProductDetailByIdPageProps extends ChakraProps {
  id?: string | string[];
}

function ProductDetailByIdPage({
  id,
  ...basisProps
}: ProductDetailByIdPageProps) {
  return (
    <Box {...basisProps}>
      <Box minW="343px" h="300px" bg="beige"></Box>
      <Flex direction="column" w="100%" h="100%" justify="space-between">
        <HStack mt="30px" spacing="1" ml="15px">
          <Text variant="bold20">인코스런 로션</Text>
          <Text variant="normal20gray">120ml</Text>
        </HStack>
        <VStack spacing="1" align="start" mb="10px" ml="15px">
          <HStack spacing="0">
            <Text variant="bold20commerse">27,000</Text>
            <Text variant="normal20">원</Text>
          </HStack>
          <HStack fontWeight="bold" fontSize="12px" spacing="1">
            <Text>3만원 이상 구매시</Text>
            <Text color="commerse.500">무료배송</Text>
          </HStack>
          <Text>
            순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를
            위한 고보습 로션
          </Text>
          <HStack spacing="1">
            <RatingIcon />
            <Text variant="bold16">4.3</Text>
            <Text variant="normal16gray">(리뷰 125개)</Text>
          </HStack>
        </VStack>
        <VStack>
          <SubmitButton
            title="장바구니"
            variant="btnwhite"
            sizes="btnlg"
            mb="0px"
          ></SubmitButton>
          <SubmitButton
            title="바로구매"
            variant="btncommerse"
            sizes="btnlg"
          ></SubmitButton>
        </VStack>
      </Flex>
      <Tabs variant="unstyled" align="center">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default ProductDetailByIdPage;
