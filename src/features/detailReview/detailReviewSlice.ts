import { createSlice } from '@reduxjs/toolkit';
import { getAverage } from '@utils/format';

interface reviewListTypes {
  content: string;
  created: string;
  id: number;
  nickname: string;
  rate: number;
  reviewimageSet: any;
  userId: number;
}

interface detailReviewTypes {
  reviewList: any;
  rateArray: number[];
  countNums: number[];
  total: number;
  sum: number;
  stars: number[];
}

const initialState = {
  reviewList: [],
  rateArray: [],
  countNums: [],
  total: 0,
  sum: 0,
  stars: [],
};

const detailReviewsSlice = createSlice({
  name: 'detailReviews',
  initialState,
  reducers: {
    storeReviews: (_state: detailReviewTypes, { payload }) => {
      _state.reviewList = payload;
      _state.reviewList.map((item: reviewListTypes) => {
        _state.rateArray.push(item.rate);
      });
      const { sum, countNums, total: n, stars } = getAverage(_state.rateArray);
      _state.sum = sum;
      _state.countNums = countNums.reverse();
      _state.total = n;
      _state.stars = stars;
    },
  },
});

export const { storeReviews } = detailReviewsSlice.actions;

export const {
  actions: detailReviewsSliceAction, //
  reducer: detailReviewsSliceReducer,
} = detailReviewsSlice;

export default detailReviewsSlice;
