import React, { Dispatch, SetStateAction } from 'react';

import { Button, ButtonProps } from '@chakra-ui/react';

import { STATUS } from '@constants/status';

interface CartOrderpageSuccessPageProps extends ButtonProps {
  status: string;
  oid: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setOrderId: Dispatch<SetStateAction<string>>;
  open: boolean;
}

const CancelButton = ({
  status,
  setOpen,
  setOrderId,
  open,
  oid,
  ...basisProps
}: CartOrderpageSuccessPageProps) => {
  return (
    <Button
      colorScheme={STATUS.NOTARRIVCE.includes(status) ? 'commerse' : 'white'}
      w="140px"
      color={STATUS.NOTARRIVCE.includes(status) ? 'white' : 'commerse.500'}
      borderColor="commerse.500"
      onClick={() => {
        setOrderId(oid);
        setOpen(!open);
      }}
      {...basisProps}
    >
      {STATUS.NOTARRIVCE.includes(status) ? '주문취소' : '리뷰작성'}
    </Button>
  );
};

export default CancelButton;
