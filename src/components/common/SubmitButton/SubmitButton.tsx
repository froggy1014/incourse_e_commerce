import { Button } from '@chakra-ui/react';

interface SubmitButtonType {
  variant: string;
  title: string;
  sizes?: string;
  w?: string;
  mt?: string;
  mb?: string;
  isDisabled?: boolean;
  type?: string;
  onClick?: () => void;
}

export const SubmitButton = (props: SubmitButtonType) => {
  const {
    title,
    variant,
    isDisabled = false,
    sizes,
    mt,
    mb,
    w,
    onClick,
    type = 'submit',
  } = props;
  return (
    <>
      <Button
        w={w}
        mt={mt}
        mb={mb}
        type={type !== 'submit' ? 'button' : 'submit'}
        borderRadius="100px"
        border="1px"
        fontSize="16px"
        fontWeight="bold"
        variant={variant}
        size={sizes}
        isDisabled={isDisabled}
        onClick={onClick}
      >
        {title}
      </Button>
    </>
  );
};
