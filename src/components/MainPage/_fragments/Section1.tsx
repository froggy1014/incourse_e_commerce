import { Container, Image, Text } from '@chakra-ui/react';

import ArrowRightIcon from '@components/common/@Icons/System/ArrowRight';

const Section1 = () => {
  const handleClick = () => {
    console.log('Section 1 Click!');
  };

  return (
    <Container centerContent position="relative">
      <Image
        objectFit="cover"
        src="/images/Section1.png"
        alt="page1"
        minW="375px"
        h="auto"
      />
      <Text
        w="128px"
        position="absolute"
        bottom="200px"
        left="16px"
        variant="normal16"
        alignItems="center"
        cursor="pointer"
        onClick={handleClick}
      >
        이벤트상세보기 <ArrowRightIcon />
      </Text>
    </Container>
  );
};

export default Section1;
