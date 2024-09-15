import React, {useState} from 'react';

const Carousel = () => {
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

  // 현재 슬라이드 인덱스를 관리
  const [currentIndex, setCurrentIndex] = useState(0);

  // 이전 슬라이드로 이동
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // 다음 슬라이드로 이동
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    // <div className='flex flex-col'>
    <div className='flex flex-col'>
      <div className='mt-[72px] bg-orange w-full h-96 flex flex-col items-center justify-center relative'>
        {/* 현재 슬라이드에 따라 배경 이미지 변경 */}
        <div
          className="h-screen w-2/4 flex flex-col items-center justify-center bg-cover bg-center"
          style={{backgroundImage: `url(${slides[currentIndex].url})`}}
        ></div>

        {/* 이전 슬라이드 버튼 */}
        <button
          onClick={prevSlide}
          className='absolute top-[40%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer'
        >
          &#10094;
        </button>

        {/* 다음 슬라이드 버튼 */}
        <button
          onClick={nextSlide}
          className='absolute top-[40%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer'
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;