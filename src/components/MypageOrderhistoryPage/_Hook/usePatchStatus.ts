import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';

import { patchShipStatus } from '@apis/_axios/patch/axiosPatch';

import { QUERY_KEY } from '@constants/query-keys';

type TStatus = {
  oid: string;
  status: string;
};

export function usePatchStatus(): UseMutateFunction<
  void,
  unknown,
  TStatus,
  unknown
> {
  const QueryClient = useQueryClient();
  const { mutate } = useMutation((data: TStatus) => patchShipStatus(data), {
    onSuccess: () => {
      QueryClient.invalidateQueries([QUERY_KEY.MYORDERSSTATUS]);
    },
  });

  return mutate;
}
