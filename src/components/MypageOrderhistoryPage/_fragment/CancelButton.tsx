import React, { Dispatch, SetStateAction } from 'react';

import { Button, ButtonProps } from '@chakra-ui/react';

import { STATUS } from '@constants/status';

interface CartOrderpageSuccessPageProps extends ButtonProps {
  status: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

const CancelButton = ({
  status,
  setOpen,
  open,
  ...basisProps
}: CartOrderpageSuccessPageProps) => {
  return (
    <Button
      colorScheme={STATUS.PAID.includes(status) ? 'commerse' : 'white'}
      w="140px"
      color={STATUS.PAID.includes(status) ? 'white' : 'commerse.500'}
      borderColor="commerse.500"
      onClick={() => setOpen(!open)}
      {...basisProps}
    >
      {STATUS.PAID.includes(status) ? '주문취소' : '리뷰작성'}
    </Button>
  );
};

export default CancelButton;
