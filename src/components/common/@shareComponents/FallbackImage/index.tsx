import { NextPage } from 'next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface IProps {
  src: string;
  alt: string;
}

export const FallbackImage: NextPage<IProps> = (props) => {
  const [imgSrc, setImgSrc] = useState('');
  useEffect(() => {
    setImgSrc(props.src.split('media/')[2]);
  }, [props.src]);

  return (
    <Image
      {...props}
      unoptimized={true}
      width="80px"
      height="80px"
      src={
        imgSrc
          ? process.env.NEXT_PUBLIC_AWS_S3_URL + imgSrc
          : '/images/fallback.png'
      }
      onError={() => {
        setImgSrc('/images/fallback.png');
      }}
    />
  );
};
