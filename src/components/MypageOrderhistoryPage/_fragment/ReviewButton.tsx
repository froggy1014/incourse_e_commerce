import Link from 'next/link';
import React from 'react';

import { Button, ButtonProps } from '@chakra-ui/react';

import { ROUTES } from '@constants/routes';

interface CartOrderpageSuccessPageProps extends ButtonProps {}

const ReviewButton = ({ ...basisProps }: CartOrderpageSuccessPageProps) => {
  return (
    <Link href={`${ROUTES.MYPAGE.POSTREVIEW}?random=random`}>
      <Button w="140px" variant="btnwhite" {...basisProps}>
        리뷰작성
      </Button>
    </Link>
  );
};

export default ReviewButton;
