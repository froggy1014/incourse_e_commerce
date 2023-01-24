import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Box,
  Button,
  ChakraProps,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';

import { storeReviews } from '@features/detailReview/detailReviewSlice';

import PurchaseModal from '@components/pages/ProductPage/_fragment/PurchaseModal';

import DetailSection1 from './_fragment/DetailSection1';
import DetailSection2 from './_fragment/DetailSection2';
import DetailSection3 from './_fragment/DetailSection3';
import ProductInfo from './_fragment/ProductInfo';
import { DetailType } from './data';

interface ProductDetailByIdPageProps extends ChakraProps {
  props: DetailType;
}

function ProductDetailByIdPage({
  props,
  ...basisProps
}: ProductDetailByIdPageProps) {
  const dispatch = useDispatch();
  const [imgSrc, setImgSrc] = useState(props.photo);
  const {
    id,
    name,
    description,
    price,
    capacity,
    detail,
    reviewList,
    reviewCount,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sectionOne = useRef(null);
  const sectionTwo = useRef(null);
  const sectionThree = useRef(null);
  const scrollToSection = (
    elementRef: React.MutableRefObject<HTMLButtonElement | null>,
  ) => {
    if (elementRef.current !== null) {
      const offset = elementRef.current.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (reviewList.length) dispatch(storeReviews(reviewList));
  }, [dispatch, reviewList]);

  return (
    <Box {...basisProps}>
      <Image
        width="343px"
        height="300px"
        objectFit="cover"
        src={imgSrc}
        onError={() => {
          setImgSrc(`/images/ProductDetail.png`);
        }}
      />
      <ProductInfo
        id={id}
        name={name}
        description={description}
        price={price}
        capacity={capacity}
        reviewCount={reviewCount}
        onOpen={onOpen}
      />
      <HStack w="100%" justify="space-evenly" pb="30">
        <Button variant="btntoggle" onClick={() => scrollToSection(sectionOne)}>
          상세정보
        </Button>
        <Button variant="btntoggle" onClick={() => scrollToSection(sectionTwo)}>
          구매정보
        </Button>
        <Button
          variant="btntoggle"
          onClick={() => scrollToSection(sectionThree)}
        >
          리뷰 ({reviewCount})
        </Button>
      </HStack>
      <Box ref={sectionOne}>
        <DetailSection1 detail={detail} />
      </Box>
      <Box ref={sectionTwo}>
        <DetailSection2 />
      </Box>
      <Box ref={sectionThree}>
        <DetailSection3 />
      </Box>
      <PurchaseModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default ProductDetailByIdPage;
