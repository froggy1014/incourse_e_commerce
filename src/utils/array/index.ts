import { IItem } from '@components/pages/MypageOrderhistoryPage/OrderHistory.d';

export const removeDuplecate = <T>(arr: T[]): T[] => Array.from(new Set(arr));

export const divideArraybyuuid = (arr: IItem[]) => {
  const AllorderIds = arr.map((item) => item.orderId);
  const filteredIds = AllorderIds.filter((c, index) => {
    return AllorderIds.indexOf(c) === index;
  });

  const returnArray = Array(filteredIds.length).fill([]);

  filteredIds.forEach((v, i) => {
    returnArray[i] = arr.filter((item, i) => item.orderId === v);
  });

  return returnArray;
};
