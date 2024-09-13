import React from 'react'
import './KakaoMap.style.css';
import { Map, MapMarker } from "react-kakao-maps-sdk";

export const KakaoMap = ({latitude,longitude}) => {
  
  return (
    <div className="h-full">
      <Map
        center={{ lat: latitude, lng: longitude }}
        style={{
          width: '100%',
          height: '500px',
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
            className="h-full"
            style={{
              fontSize: '19px',
              fontWeight: '700',
              borderRadius: '10px',
            }}
          >
            😎 해당 위치 😎
          </div>
        </MapMarker>
      </Map>
    </div>
    //핀에 적힐 이름 (위치 이름)
  )
 }
