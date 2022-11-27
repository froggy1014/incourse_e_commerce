import { NextPage } from 'next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface IProps {
  src: string;
  alt: string;
}

export const FallbackImage: NextPage<IProps> = (props) => {
  const [imgSrc, setImgSrc] = useState(props.src);

  useEffect(() => {
    setImgSrc(props.src);
  }, [props.src]);

  return (
    <Image
      {...props}
      unoptimized={true}
      width="80px"
      height="80px"
      src={imgSrc ? imgSrc : '/images/fallback.png'}
      onError={() => {
        setImgSrc('/images/fallback.png');
      }}
    />
  );
};
