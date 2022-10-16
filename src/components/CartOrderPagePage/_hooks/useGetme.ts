import { useQuery } from 'react-query';

import { axiosInstance } from '@utils/axios';

const fetchMyInfo = async () => {
  return await axiosInstance('user/me/').then((res: any) => res.data);
};

export const useGetme = () => {
  return useQuery(['getMe'], fetchMyInfo);
};
