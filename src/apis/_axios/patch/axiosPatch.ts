import {
  IPatchCartItem,
  IPatchGetme,
  IPatchOrderInfo,
  IPatchOrderInfoBody,
  IPatchStatus,
} from '@types';

import { patch } from '../request';

export async function patchShipStatus({
  id,
  shippingStatus,
}: IPatchStatus): Promise<IPatchStatus> {
  const body = { shippingStatus };
  return await patch(`order/status/${id}/`, body);
}

export async function patchGetMe(
  data: Omit<IPatchGetme, 'id'>,
): Promise<IPatchGetme> {
  return await patch('user/me/', data);
}

export async function patchCartItem({
  id,
  count,
}: {
  id: number;
  count: number;
}): Promise<IPatchCartItem> {
  return await patch(`cart/item/${id}/`, { id, count });
}

export async function patchOrder(
  oid: string,
  body: IPatchOrderInfoBody,
): Promise<IPatchOrderInfo> {
  return await patch(`order/${oid}/`, body);
}
