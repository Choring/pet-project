import React from "react";
import {useCategory} from "../../../hooks/useCategory";
import NotFound from "../../../components/NotFound";
import LoadingSpinner from "../../../components/LoadingSpinner";


const Section = ({title}) => {
  const {data, isLoading, isError} = useCategory();

  if (isError) return <NotFound/>;
  if (isLoading) return <LoadingSpinner/>;

  return (
    <div>
      <header className="text-2xl mt-5 ml-3">{title}</header>
      <div className="w-full flex flex-wrap justify-center">
        {
          data?.filter((item) => item.카테고리3 === "미술관").slice(0, 7)
            .map((item, index) => (
              <div
                key={index}
                className="w-44 h-56 m-3 border-solid border divide-y mt-5 sm:w-40 md:w-48 lg:w-56"
              >
                <div className="h-3/5 w-full">
                  {
                    title === '카페' ? <img
                      src={'https://littledeep.com/wp-content/uploads/2021/05/cafe-illustration-main-1024x607.png'}
                      alt={'카페 이미지'}
                      className="h-full w-full object-cover"
                    /> : title === '병원' ? <img
                      src={'https://www.urbanbrush.net/web/wp-content/uploads/edd/2021/07/urbanbrush-20210708203530500643.jpg'}
                      alt={'병원 이미지'}
                      className="h-full w-full object-cover"
                    /> : <img
                      src={'https://img.freepik.com/free-vector/guide-and-excursion-background-with-art-museum-symbols-flat-vector-illsutration_1284-82174.jpg'}
                      alt={'미술관, 박물관 이미지'}
                      className="h-full w-full object-cover"
                    />
                  }
                </div>
                <div className="p-2">
                  <div className="text-lg">{item.시설명}</div>
                  <div className="text-base">{item.주소}</div>
                  <div className="text-base">{item.운영시간}</div>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
}

export default Section;