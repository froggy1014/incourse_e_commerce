import { Button, ButtonProps } from '@chakra-ui/react';

interface SubmitButtonType extends ButtonProps {}

export const SubmitButton = ({ ...props }: SubmitButtonType) => {
  const { title, variant, isDisabled = false, size } = props;
  return (
    <>
      <Button
        borderRadius="100px"
        border="1px"
        fontSize="16px"
        h="50px"
        fontWeight="bold"
        variant={variant}
        size={size}
        isDisabled={isDisabled}
        {...props}
      >
        {title}
      </Button>
    </>
  );
};
