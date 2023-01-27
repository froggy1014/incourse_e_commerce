import { getCookie } from 'cookies-next';
import path from 'path';

import { patch } from '../request';
import { IOrderInfo, IProfileInfo, TStatus } from './axiosPatch.d';

export const userId = Number(getCookie('userId'));

export async function patchShipStatus({ oid, status }: TStatus): Promise<any> {
  const body = { shippingStatus: status };
  return await patch(`order/status/${oid}/`, body);
}

export async function patchGetMe(data: IProfileInfo): Promise<any> {
  return await patch('user/me/', data);
}

export async function patchCartItem({
  id,
  count,
}: {
  id: number;
  count: number;
}) {
  return await patch(`cart/item/${id}/`, { id, count });
}

export async function patchOrder(oid: string, body: any): Promise<IOrderInfo> {
  return await patch(`order/${oid}/`, body);
}
