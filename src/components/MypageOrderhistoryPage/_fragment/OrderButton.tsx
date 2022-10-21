import React, { Dispatch, SetStateAction } from 'react';

import { Button, ButtonProps } from '@chakra-ui/react';

interface CartOrderpageSuccessPageProps extends ButtonProps {
  status: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

const OrderButton = ({
  status,
  setOpen,
  open,
  ...basisProps
}: CartOrderpageSuccessPageProps) => {
  return (
    <Button
      colorScheme={status === 'PAID' ? 'commerse' : 'white'}
      w="140px"
      color={status === 'PAID' ? 'white' : 'commerse'}
      onClick={() => setOpen(!open)}
      {...basisProps}
    >
      주문취소
    </Button>
  );
};

export default OrderButton;
