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
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcHIirp%2FbtrMORa18KH%2FirkKcoyk9vqK4OdCstIjH0%2Fimg.png"
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
