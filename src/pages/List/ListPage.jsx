import React, { useState } from 'react'
import './ListPage.style.css';
import { usePetFriendlyFacility } from '../../hooks/usePetFriendlyFacility';
import { KakaoMap } from './component/KakaoMap';
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from "react-router-dom";

export const ListPage = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [latitude, setLatitude] = useState(queryParams.get('lat'));
  const [longitude, setLongitude] = useState(queryParams.get('lng'));
  const {data, isLoading, isError, error} = usePetFriendlyFacility({page});

  const handleMap = (위도,경도) => {
    setLatitude(위도);
    setLongitude(경도);
  }

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  console.log(data);

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(isError) {
    return <div>{error}</div>
  }
  
  return (
    <div className='section max-w-[1200px] mx-auto'>
        <div className='w-full my-5 flex justify-between'>
            <p className="font-bold text-[24px] text-center">반려동물 동반시설 리스트</p>
            <button className="border p-2 px-3 rounded-[18px] bg-[#ff7336] text-white" onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
        <div className="article">
            <div className="list-container h-[100vh] overflow-y-scroll">
                <div>
                    {data.data?.map((item, index) => {
                    return(
                        <div className='item-box flex justify-end flex-col p-[12px] mb-2 rounded-[20px]' key={index} onClick={ () => handleMap(item.위도,item.경도)}>
                        <p className="text-[22px] font-bold">{item["시설명"]}</p>
                        <p className="text-[16px]">{item["시군구 명칭"]}</p>
                        <p className="text-[16px]">{item["운영시간"]}</p>
                        <p className="text-[16px]">{item["휴무일"]}</p>
                        </div>
                    )
                    })}
                </div>
                <div>
                    <ReactPaginate 
                    className='pagination'
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={0}
                    pageCount={data?.totalCount}
                    previousLabel="<"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel={false}
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={page - 1}
                    />
                </div>
            </div>
            <div className='map-container h-full'>
                <KakaoMap latitude={latitude} longitude={longitude} />
            </div>
        </div>
    </div>
  )
}
