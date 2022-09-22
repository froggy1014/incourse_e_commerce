import React from 'react';

import { Box, ChakraProps, Flex, Image } from '@chakra-ui/react';

import MainHeader from '@components/common/@Layout/MobileLayout/_fragments/MainHeader';

interface MainPageProps extends ChakraProps {}

function MainPage({ ...basisProps }: MainPageProps) {
  return (
    <>
      <Flex direction="column">
        <MainHeader px="16px" />
        <Image
          objectFit="cover"
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fce9Abm%2FbtrMPm2Klv8%2FRFRk7IVCHQdIEkaxDJgee0%2Fimg.png"
          alt="page1"
          boxSize="375px"
          h="auto"
        />
        <Box as="section" w="375px" h="712px" bg="skyblue">
          Helow
        </Box>
        <Box as="section" w="375px" h="712px" bg="light">
          Helow
        </Box>
        <Box as="section" w="375px" h="712px" bg="skyblue">
          Helow
        </Box>
        <Box as="section" w="375px" h="712px" bg="beige">
          Helow
        </Box>
      </Flex>
    </>
  );
}

export default MainPage;
