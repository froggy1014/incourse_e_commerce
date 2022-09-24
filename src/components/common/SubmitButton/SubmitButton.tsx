import { Button } from '@chakra-ui/react';

interface SubmitButtonType {
  variant: string;
  title: string;
  bg?: string;
  w?: string;
  mt?: string;
  mb?: string;
  isDisabled?: boolean;
}

export const SubmitButton = (props: SubmitButtonType) => {
  const { title, variant, bg, w, isDisabled = false, mt, mb } = props;
  return (
    <>
      <Button
        type="submit"
        borderRadius="100px"
        border="1px"
        borderColor="commerse.500"
        _hover={{
          borderColor: 'commerse.600',
          bg: `${bg}.600`,
        }}
        isDisabled={isDisabled}
        variant={`${variant}`}
      >
        {title}
      </Button>
    </>
  );
};
