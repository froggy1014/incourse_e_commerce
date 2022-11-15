import { getCookie } from 'cookies-next';

import { IProfileInfo, TStatus } from './axiosPatch.d';
import { patch } from './request';

export const userId = Number(getCookie('userId'));

export async function patchShipStatus({ oid, status }: TStatus): Promise<any> {
  const body = { shippingStatus: status };
  return await patch(`order/status/${oid}/`, body);
}

export async function patchGetMe(data: IProfileInfo): Promise<any> {
  return await patch('user/me/', data);
}
