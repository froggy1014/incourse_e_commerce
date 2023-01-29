import { IOrderedItem, IPatchOrder, IProductDetail } from '@types';

import { Box, ChakraProps, Divider, Stack, Text } from '@chakra-ui/react';

import { Loading } from '@shareComponents/index';
import { formatDateDash } from '@utils/format';

import { AddressInfo, OrderedItem, PaymentInfo } from './_fragment';
import { useProductInfoQuery } from './_hook/useProductInfoQuery';

interface CartOrderpageSuccessPageProps extends ChakraProps {
  orderedInfo: IPatchOrder;
  orderedItem: IOrderedItem[];
}

function CartOrderpageSuccessPage({
  orderedInfo,
  orderedItem,
  ...basisProps
}: CartOrderpageSuccessPageProps) {
  const { data: info, isLoading } = useProductInfoQuery(orderedItem);
  if (isLoading) return <Loading />;

  return (
    <Stack {...basisProps}>
      <Text variant="pageTitle">결제내역</Text>

      <Stack divider={<Divider variant="fullthick" />}>
        <Box>
          <Divider variant="fullthin" />
          <Text fontWeight="bold" py="10px">
            {formatDateDash(new Date())}
          </Text>
          <Divider variant="fullthin" mb="10px" />
          {info?.map((product: IProductDetail, i: number) => {
            return (
              <OrderedItem
                key={orderedItem[i].productId}
                product={product}
                count={orderedItem[i].count}
              />
            );
          })}
        </Box>
        <AddressInfo orderedInfo={orderedInfo} />
        <PaymentInfo orderedInfo={orderedInfo} />
      </Stack>
    </Stack>
  );
}

export default CartOrderpageSuccessPage;
