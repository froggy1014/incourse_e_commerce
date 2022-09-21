import React from 'react';

import { Button } from '@chakra-ui/react';

interface SubmitButtonType {
  title: string;
  bg?: string;
  w?: string;
  mt?: string;
  mb?: string;
  isDisabled?: boolean;
}

const SubmitButton = (props: SubmitButtonType) => {
  const {
    title,
    bg = 'commerse',
    w = '100%',
    isDisabled = false,
    mt = '90px',
    mb = '50px',
  } = props;
  return (
    <>
      <Button
        mb={mb}
        mt={mt}
        w={w}
        borderRadius="100px"
        bg={`${bg}.500`}
        variant="outline outlin"
        border="1px"
        borderColor="commerse.500"
        _hover={{
          borderColor: 'commerse.600',
          bg: `${bg}.600`,
        }}
        isDisabled={isDisabled}
        color="white"
      >
        {title}
      </Button>
    </>
  );
};

export default SubmitButton;

// button size 100%
