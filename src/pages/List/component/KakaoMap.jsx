import React from 'react'
import './KakaoMap.style.css';
import { Map, MapMarker } from "react-kakao-maps-sdk";

export const KakaoMap = ({latitude,longitude,name}) => {
  return (
    <div className="h-full">
      <Map
        center={{ lat: latitude, lng: longitude }}
        style={{
          width: '100%',
          height: '600px',
          borderRadius: '20px',
        }}
      >
      {/* 지도에 보여줄 위치 지정 (위도,경도)  */}
      
        <MapMarker
          style={{ border: 'tranparent' }}
          position={{ lat: latitude, lng: longitude }}
        >
        {/* 핀 찍힐 위치 */}
        
          <div
            className="w-full"
            style={{
              fontSize: '18px',
              fontWeight: '700',
              borderRadius: '10px',
            }}
          >
            <p className="text-center">{name}</p>
          </div>
        </MapMarker>
      </Map>
    </div>
    //핀에 적힐 이름 (위치 이름)
  )
 }
