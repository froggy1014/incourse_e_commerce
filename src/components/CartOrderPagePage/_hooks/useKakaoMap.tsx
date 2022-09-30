import { useEffect, useState } from 'react';

const useKakaoMap = (mapContainer: HTMLDivElement | null) => {
  const [kakao, setKakao] = useState<any>(null);
  const [map, setMap] = useState<any>(null);
  const [services, setServices] = useState<any>(null);
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (!mapContainer) return;
    window.kakao?.maps.load(() => {
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
      setMap(new window.kakao.maps.Map(mapContainer, mapOption));
      setKakao(window.kakao);
      setServices(window.kakao.maps.services);
    });
  }, [mapContainer]);

  return { kakao, map, services };
};

export default useKakaoMap;
