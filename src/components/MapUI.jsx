import React from 'react';
import { Map } from 'react-kakao-maps-sdk';

export default function MapUI() {
  return (
    <>
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: '1000px', height: '600px' }}
        level={3}
      />
    </>
  );
}
