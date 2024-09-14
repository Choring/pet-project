import React, {useState, useEffect} from 'react'
import { IoIosCafe } from "react-icons/io";
import { FaHospital } from "react-icons/fa";
import { PiPaintBrushBroadBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const gotoHospital = () => {
    navigate('/list?category=동물병원');
  }

  const gotoCafe = () => {
    navigate('/list?category=카페');
  }

  const gotoGallery = () => {
    navigate('/list?category=문화시설');
  }

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

  const Section = ({ title, icon, nav }) => (
    <div onClick={nav} className=' sm:h-[450px] h-[300px] sm:w-[400px] w-[300px] m-10 bg-orange flex flex-col justify-center rounded-3xl cursor-pointer '>
      <header className="text-[50px] font-bold mt-5 flex justify-center">{title}</header>
      <div className="w-full flex md:flex-row flex-col justify-center items-center mt-16">
        <div className='text-[100px]'>{icon}</div>
      </div>
    </div>
  );

  return (
    <div className='flex flex-col items-center'>
      <div className='mt-[72px] w-full sm:h-96 h-64 bg-orange flex flex-col items-center justify-center'>
        <div className={`sm:h-96 h-64 sm:w-[700px] w-screen flex flex-col items-center justify-center bg-cover bg-center transition-opacity duration-1000 
          ${fade ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
        </div>
      </div>

      <div className='w-screen flex lg:flex-row flex-col justify-between items-center '>
        <Section title="병원" icon={<FaHospital />} nav={gotoHospital}/>
        <Section title="카페" icon={<IoIosCafe/>} nav={gotoCafe}/>
        <Section title="문화시설" icon={<PiPaintBrushBroadBold />} nav={gotoGallery}/>
      </div>
    </div>
  )
}
