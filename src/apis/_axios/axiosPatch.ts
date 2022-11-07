import { getCookie } from 'cookies-next';

import { TStatus } from './axiosPatch.d';
import { patch } from './request';

export const userId = Number(getCookie('userId'));

export async function patchShipStatus({ oid, status }: TStatus): Promise<void> {
  const body = { shippingStatus: status };
  return await patch(`order/status/${oid}/`, body);
}
