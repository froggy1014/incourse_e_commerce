import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';

import { IPatchStatus } from '@types';

import { patchShipStatus } from '@apis/_axios/patch/axiosPatch';

import { QUERY_KEY } from '@constants/query-keys';

type TStatus = {
  oid: string;
  status: string;
};

export function usePatchStatus(): UseMutateFunction<
  IPatchStatus,
  unknown,
  IPatchStatus,
  unknown
> {
  const QueryClient = useQueryClient();
  const { mutate } = useMutation(
    (data: IPatchStatus) => patchShipStatus(data),
    {
      onSuccess: () => {
        QueryClient.invalidateQueries([QUERY_KEY.MYORDERSSTATUS]);
      },
    },
  );

  return mutate;
}
