import React, {useState} from 'react'

export const MainPage = () => {

  const slides = [
    {
      url: 'https://health.chosun.com/site/data/img_dir/2022/05/24/2022052401445_0.jpg'
    },
    {
      url: 'https://imgnn.seoul.co.kr/img/upload/2016/08/08/SSI_20160808134848_V.jpg'
    },
    {
      url: 'https://img.seoul.co.kr/img/upload/2020/03/02/SSI_20200302104923_O2.jpg'
    },
    {
      url: 'https://health.chosun.com/site/data/img_dir/2022/02/24/2022022401244_0.jpg'
    },
    {
      url: 'https://blogs.cdc.gov/wp-content/uploads/sites/6/2018/05/HEADER-PHOTO_iStock-871996576.jpg'
    },
  ];

  const Section = ({ title }) => (
    <div>
      <header className="text-2xl mt-5 ml-3">{title}</header>
      <div className="w-full flex flex-row">
        {Array(7).fill(0).map((_, index) => (
          <div key={index} className="w-44 h-56 mr-5 border-solid border divide-y mt-5">
            <div className='h-4/6 w-full'></div>
            <div>
              <div className='text-lg'>시설명</div>
              <div className='text-base'>주소</div>
              <div className='text-base'>운영시간</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className='flex flex-col'>
      <div className='mt-[72px] bg-orange w-full h-96 flex flex-col items-center justify-center'>
        <div className="h-screen w-2/5 flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${slides[0].url})` }}>
        </div>
        <button className=' group-hover:block absolute top-[40%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer'>
          &#10094;
        </button>
        <button className='absolute top-[40%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer'>
          &#10095;
        </button>
      </div>

      <div className=' flex flex-col items-center my-[100px]'>
        <Section title="카페" />
        <Section title="미술관,박물관" />
        <Section title="병원" />
      </div>
    </div>
  )
}
