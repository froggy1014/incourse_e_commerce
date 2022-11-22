import { Box, Flex, Text } from '@chakra-ui/react';

import { InstagramIcon, UpwardIcon } from '@icons/UI';

const Section4 = () => {
  return (
    <Flex
      w="375px"
      h="300px"
      direction="column"
      bgGradient="linear(to-r, commerse.500, commerse.400)"
      color="white"
      fontSize="16px"
      justify="center"
      align="center"
      position="relative"
    >
      <Text fontSize="20px" fontWeight="bold">
        저에 대해 더 궁금하신가요?
      </Text>
      <Box my="10px" textAlign="center">
        <Text>인스타그램을 방문하시면 더욱 다양한</Text>
        <Text>저의 피드를 확인하실 수 있어요!</Text>
      </Box>
      <Text fontWeight="bold" textAlign="center">
        <a
          href="https://www.instagram.com/min6_6b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon /> min6_6b
        </a>
      </Text>
      <UpwardIcon />
    </Flex>
  );
};

export default Section4;
