import Link from 'next/link';
import React from 'react';

import { Button, ButtonProps } from '@chakra-ui/react';

import { ROUTES } from '@constants/routes';

interface CartOrderpageSuccessPageProps extends ButtonProps {
  orderId: string;
}

const ReviewButton = ({
  orderId,
  ...basisProps
}: CartOrderpageSuccessPageProps) => {
  return (
    <Link href={`${ROUTES.MYPAGE.POSTREVIEW}?orderId=${orderId}`}>
      <Button w="140px" variant="btnwhite" {...basisProps}>
        리뷰작성
      </Button>
    </Link>
  );
};

export default ReviewButton;
