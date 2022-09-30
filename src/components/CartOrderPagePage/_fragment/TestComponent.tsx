import React, { useEffect, useRef, useState } from 'react';

import { Box } from '@chakra-ui/react';

import useKakaoMap from '../_hooks/useKakaoMap';

const TestComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { kakao, map, services } = useKakaoMap(mapContainer.current);

  return (
    <Box w="300px" h="300px" ref={mapContainer}>
      hi world
    </Box>
  );
};

export default TestComponent;
