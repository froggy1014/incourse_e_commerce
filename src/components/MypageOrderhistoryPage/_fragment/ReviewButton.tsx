import Link from 'next/link';
import React from 'react';

import { Button, ButtonProps } from '@chakra-ui/react';

import { ROUTES } from '@constants/routes';
import { getQueryString } from '@utils/format';

import { IItem } from '../OrderHistory';

interface CartOrderpageSuccessPageProps extends ButtonProps {
  orderInfo: IItem;
}

const ReviewButton = ({
  orderInfo,
  ...basisProps
}: CartOrderpageSuccessPageProps) => {
  const queryUrl = getQueryString(orderInfo);
  return (
    <Link href={`${ROUTES.MYPAGE.POSTREVIEW}?${queryUrl}`}>
      <Button w="140px" variant="btnwhite" {...basisProps}>
        리뷰작성
      </Button>
    </Link>
  );
};

export default ReviewButton;
