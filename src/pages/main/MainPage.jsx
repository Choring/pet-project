import React, {useState, useEffect} from 'react'

export const MainPage = () => {

  const slides = [
    {
      url: 'https://www.hisky.it/storage/app/resources/resize/img_973877e1d8b8acd2c4485612fe93086d_800_900_0_0_auto.jpg'
    },
    {
      url: 'https://health.chosun.com/site/data/img_dir/2022/05/24/2022052401445_0.jpg'
    },
    {
      url: 'https://media.istockphoto.com/id/1348512805/photo/mother-and-son-playing-with-a-cat-at-home.jpg?s=612x612&w=0&k=20&c=pBa2sOneSfff5Hz1s7UYRdDCtj4vOsGbi8xXE6_QlvY='
    },
    {
      url: 'https://imgnn.seoul.co.kr/img/upload/2016/08/08/SSI_20160808134848_V.jpg'
    },
    {
      url: 'https://hips.hearstapps.com/hmg-prod/images/traveling-with-a-cat-woman-holding-cat-in-car-1644513685.jpg?crop=1xw:1xh;center,top&resize=980:*'
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setFade(true);
      }, 650);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);
  /*
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(true);
    }, 500);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(true);
    }, 500);
  };
  */

  const Section = ({ title }) => (
    <div>
      <header className="text-2xl mt-5 ml-3">{title}</header>
      <div className="w-full flex md:flex-row flex-col justify-center">
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
      <div className='mt-[72px] w-full sm:h-96 h-64 bg-orange flex flex-col items-center justify-center'>
        <div className={`sm:h-96 h-64 sm:w-[700px] w-screen flex flex-col items-center justify-center bg-cover bg-center transition-opacity duration-1000 
          ${fade ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
        </div>
      </div>

      <div className=' flex flex-col items-center my-[100px]'>
        <Section title="카페" />
        <Section title="문화시설" />
        <Section title="병원" />
      </div>
    </div>
  )
}
