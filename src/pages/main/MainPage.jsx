import React from 'react'
import Carousel from "./component/Carousel";
import Section from "./component/Section";

export const MainPage = () => {

  return (
    <div>
      {/* main-h-screen justify-center 추가 my-[100px] 수정 */}
      <Carousel/>
      <div className='min-h-screen justify-center flex flex-col items-center my-[50px] sm:my-[70px] md:my-[100px] lg:my-[150px]'>
        <Section title="카페"/>
        <Section title="미술관,박물관"/>
        <Section title="병원"/>
      </div>
    </div>
  )
}
