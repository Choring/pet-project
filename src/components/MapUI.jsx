import React, { useEffect, useState } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

const KAKAO_MAP_API_KEY = `89295d11ebf99024b5896e56f20e1cd9`;

export default function MapUI({ lat, lng, title }) {
  useKakaoLoader();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // console.log('카카오 맵 스크립트 로드 완료');
      window.kakao.maps.load(() => {
        // console.log('카카오 맵 API 로드 완료');
        setIsLoaded(true);
      });
    };

    script.onerror = () => {
      console.error('카카오 맵 스크립트 로드 실패');
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {isLoaded && (
        <div style={{ width: '1000px', height: '1000px' }}>
          <Map
            center={{ lat, lng }} // props로 전달받은 lat, lng 사용
            style={{ width: '100%', height: '100%' }}
            level={3}
          >
            <MapMarker position={{ lat: lat, lng: lng }}>
              <div style={{ color: '#000' }}>{title}</div>
            </MapMarker>
          </Map>
        </div>
      )}
    </>
  );
}
