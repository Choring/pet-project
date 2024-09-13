import React, { useEffect, useState } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import { FaDoorOpen, FaLocationDot } from 'react-icons/fa6';
import { MdMoney, MdMoneyOff, MdMuseum } from 'react-icons/md';
import { LuParkingCircle, LuParkingCircleOff } from 'react-icons/lu';

const KAKAO_MAP_API_KEY = `89295d11ebf99024b5896e56f20e1cd9`;

export default function MapUI({ lat, lng, data, title, phoneNumber }) {
  useKakaoLoader();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // console.log(data);
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
            <MapMarker
              position={{ lat: lat, lng: lng }}
              onClick={() => setIsOpen(true)}
            >
              {isOpen && (
                <div style={{ minWidth: '150px' }}>
                  <img
                    alt='close'
                    width='14'
                    height='13'
                    src='https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif'
                    style={{
                      position: 'absolute',
                      right: '5px',
                      top: '5px',
                      cursor: 'pointer',
                    }}
                    onClick={() => setIsOpen(false)}
                  />
                  <div>
                    <div>{title}</div>
                  </div>
                </div>
              )}
            </MapMarker>
          </Map>
        </div>
      )}
    </>
  );
}

// data?.data?.전화번호
