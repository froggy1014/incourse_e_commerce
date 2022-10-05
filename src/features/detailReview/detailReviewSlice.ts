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
  reviewList: any[];
  tempArray: any[];
  rateArray: number[];
  countNums: number[];
  total: number;
  sum: number;
  stars: number[];
}

const initialState = {
  reviewList: [],
  tempArray: [],
  rateArray: [],
  countNums: [0, 0, 0, 0, 0],
  total: 0,
  sum: 0,
  stars: [0, 0, 0, 0, 0],
};

const detailReviewsSlice = createSlice({
  name: 'detailReviews',
  initialState,
  reducers: {
    storeReviews: (_state: detailReviewTypes, { payload }) => {
      _state.reviewList = payload;
      _state.tempArray = payload;
      _state.reviewList.map((item: reviewListTypes) => {
        _state.rateArray.push(item.rate);
      });
      const { sum, countNums, total: n, stars } = getAverage(_state.rateArray);
      _state.sum = sum;
      _state.countNums = countNums.reverse();
      _state.total = n;
      _state.stars = stars;
    },
    filterReviews: (_state: detailReviewTypes, { payload }) => {
      const { optionOne, optionTwo } = payload;
      switch (optionTwo) {
        case '':
          _state.reviewList = _state.tempArray.map((item) => item);
          break;
        case '포토리뷰':
          _state.reviewList = _state.tempArray.filter(
            (item) => item.reviewimageSet.length > 0,
          );
          break;
      }
      switch (optionOne) {
        case '평점높은순':
          _state.reviewList = _state.reviewList.sort(
            (a: reviewListTypes, b: reviewListTypes): any => {
              return b.rate - a.rate;
            },
          );
          break;
        case '평점낮은순':
          _state.reviewList = _state.reviewList.sort(
            (a: reviewListTypes, b: reviewListTypes): any => {
              return a.rate - b.rate;
            },
          );
          break;
        case '':
          console.log(optionTwo);
          if (optionTwo !== '')
            _state.reviewList = _state.tempArray.filter(
              (item) => item.reviewimageSet.length > 0,
            );
          else _state.reviewList = _state.tempArray.map((item) => item);
          break;
      }
    },
  },
});

export const { storeReviews, filterReviews } = detailReviewsSlice.actions;

export const {
  actions: detailReviewsSliceAction, //
  reducer: detailReviewsSliceReducer,
} = detailReviewsSlice;

export default detailReviewsSlice;
