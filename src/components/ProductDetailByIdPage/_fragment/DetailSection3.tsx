/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Divider,
  Flex,
  HStack,
  Progress,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';

import {
  filterReviews
} from '@features/detailReview/detailReviewSlice';

import { ReviewCard } from '@components/common';
import { EmptyRatingIcon, HalfRatingIcon, RatingIcon } from '@icons/UI';

interface reviewListTypes {
  content: string;
  created: string;
  id: number;
  nickname: string;
  rate: number;
  reviewimageSet: any;
  userId: number;
}

const DetailSection3 = () => {
  const [sorting, setSorting] = useState({optionOne: '', optionTwo: ''});
  const dispatch = useDispatch();
  const { countNums, total, sum, stars, reviewList } = useSelector(
    (state: RootStateOrAny) => state.detailReviews,
  );

    useEffect(() => {
      // console.log(sorting);
      dispatch(filterReviews(sorting));
    }, [sorting])

  return (
    <>
      <Flex direction="column" w="100%" my="23px">
        <HStack justify="space-between">
          <Text as="span" fontWeight="bold">
            리뷰
            <Box as="span" color="commerse.500">
              {` ${total}`}
            </Box>
            건
          </Text>
          <HStack w="193px">
            <Select
              onChange={(e) => setSorting((sorting) => 
                ({ ...sorting, 
                  optionOne: e.target.value }
              ))}
              placeholder="최신순"
              defaultValue="최신순"
              size="xs"
              bg="gray.200"
              rounded="5px"
              fontWeight="bold"
            >
              <option value="평점높은순">평점 높은순</option>
              <option value="평점낮은순">평점 낮은순</option>
            </Select>
            <Select
              onChange={(e) => setSorting((sorting) => 
                ({ ...sorting, 
                  optionTwo: e.target.value }
              ))}
              placeholder="전체보기"
              defaultValue="전체보기"
              size="xs"
              bg="gray.200"
              rounded="5px"
              fontWeight="bold"
            >
              <option value="포토리뷰">포토리뷰</option>
            </Select>
          </HStack>
        </HStack>
        <Flex justify="space-between" align="center" my="50px">
          <HStack>
            <Text
              w="40px"
              h="20px"
              bg="commerse.500"
              rounded="15px"
              color="white"
              fontWeight="bold"
              textAlign="center"
            >
              {sum}
            </Text>
            <HStack>
              {stars.map((num: number, i: number) => {
                if (num === 2) return <RatingIcon key={i} />;
                else if (num === 1) return <HalfRatingIcon key={i} />;
                else return <EmptyRatingIcon key={i} />;
              })}
            </HStack>
          </HStack>
          <HStack spacing="-6">
            {countNums.map((num: number, i: number) => {
              let value = 0;
              if (isNaN((num / total) * 100)) value = 0;
              else value = (num / total) * 100;
              return (
                <VStack key={i}>
                  <Flex>
                    <Progress
                      colorScheme={`commerse`}
                      position="relative"
                      value={value}
                      w="50px"
                      h="10px"
                      mb="10px"
                      roundedRight="5px"
                      transform="rotateZ(-90deg)"
                    />
                  </Flex>
                  <Divider transform={'translateY(1px)'} />
                  <Text color="gray.600" fontSize="12px">
                    {5 - i}점
                  </Text>
                </VStack>
              );
            })}
          </HStack>
        </Flex>
      </Flex>
      {reviewList &&
        reviewList.map((review: reviewListTypes) => {
          return <ReviewCard key={review.id} review={review} />;
        })}
    </>
  );
};

export default DetailSection3;
