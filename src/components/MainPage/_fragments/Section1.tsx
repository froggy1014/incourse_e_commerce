import { useState } from 'react';

import { Container, Image, Text } from '@chakra-ui/react';

import { CompleteModal } from '@components/common/GlobalModal/CompleteModal';
import { ArrowRightIcon } from '@icons/index';

const Section1 = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
          left="-14px"
          variant="normal16"
          alignItems="center"
          cursor="pointer"
          onClick={() => setOpen(!open)}
        >
          이벤트 상세보기 <ArrowRightIcon />
        </Text>
      </Container>
      <CompleteModal
        title="죄송합니다. 이벤트는 종료 되었습니다."
        isOpen={open}
        onClose={() => setOpen(!open)}
        setOpen={setOpen}
      />
    </>
  );
};

export default Section1;
