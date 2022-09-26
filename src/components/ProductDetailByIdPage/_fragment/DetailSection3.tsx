import React from 'react';

import { Box } from '@chakra-ui/react';

const reviews = {
  count: 5,
  next: 'http://api.example.org/accounts/?page=4',
  previous: 'http://api.example.org/accounts/?page=2',
  results: [
    {
      id: 1,
      userId: 'kelly',
      productId: 1,
      rate: 5,
      content: 'string',
      reviewimageSet: [
        {
          reviewId: 1,
          url: '/images/ReviewImage.png',
        },
      ],
    },
    {
      id: 2,
      userId: 'ovan',
      productId: 2,
      rate: 4,
      content: 'string',
      reviewimageSet: [
        {
          reviewId: 2,
          url: '/images/ReviewImage.png',
        },
      ],
    },
    {
      id: 3,
      userId: 'micheal',
      productId: 3,
      rate: 3,
      content: 'string',
      reviewimageSet: [
        {
          reviewId: 3,
          url: '/images/ReviewImage.png',
        },
      ],
    },
    {
      id: 4,
      userId: 'john',
      productId: 4,
      rate: 2,
      content: 'string',
      reviewimageSet: [
        {
          reviewId: 4,
          url: '/images/ReviewImage.png',
        },
      ],
    },
    {
      id: 5,
      userId: 'evan',
      productId: 5,
      rate: 1,
      content: 'string',
      reviewimageSet: [
        {
          reviewId: 5,
          url: '/images/ReviewImage.png',
        },
      ],
    },
  ],
};

const DetailSection3 = () => {
  console.log(reviews);
  return <Box id="ReviewsInfo" w="343px" height="1000px" bg="skyblue"></Box>;
};

export default DetailSection3;
