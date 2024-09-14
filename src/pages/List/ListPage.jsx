import React, { useEffect, useState } from 'react'
import './ListPage.style.css';
import { usePetFriendlyFacility } from '../../hooks/usePetFriendlyFacility';
import { KakaoMap } from './component/KakaoMap';
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useArtMuseum } from  "../../hooks/useArtMuseum";
import NotFound from "../../components/NotFound";
import LoadingSpinner from "../../components/LoadingSpinner";

export const ListPage = () => {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useSearchParams();
  const category = query.get("category");
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const {data, isLoading, isError, error} = useArtMuseum({page});
  const itemsPerPage = 10;
  const filteredData = data?.filter(
      (item) => (category === "문화시설") ? item.카테고리3 === "미술관" || item.카테고리3 === "박물관" : item.카테고리3 === category
    ) || [];
  const [latitude, setLatitude] = useState(filteredData[0]?.위도);
  const [longitude, setLongitude] = useState(filteredData[0]?.경도);
  const [itemName, setItemName] = useState(filteredData[0]?.시설명);

  // 현재 페이지에 해당하는 데이터만 가져오기
  const offset = page * itemsPerPage;
  const currentPageData = filteredData.slice(offset, offset + itemsPerPage);


  const handleMap = (위도,경도,시설명) => {  
    setLatitude(위도);
    setLongitude(경도);
    setItemName(시설명);
  }

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  useEffect(() => {
    setLatitude(filteredData[0]?.위도);
    setLongitude(filteredData[0]?.경도);
    setItemName(filteredData[0]?.시설명);

  },[filteredData])

  if (isError) return <NotFound />;
  if (isLoading) return <LoadingSpinner />;
  
  return (
    <div className='section max-w-[1200px] mx-auto my-[100px]'>
        <div className='w-full my-5 flex justify-between'>
            <p className="font-bold text-[24px] text-center">반려동물 동반시설 리스트</p>
            <button className="text-[white] p-2 px-3 rounded-[18px] bg-[#ff7336] text-white" onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
        <div className="article">
            <div className="list-container h-[100vh] overflow-y-scroll">
                <div>
                    {currentPageData?.map((item, index) => {
                    return(
                        <div className='item-box flex justify-end flex-col p-[12px] mb-2 rounded-[20px]' key={index} onClick={ () => handleMap(item.위도,item.경도,item.시설명)}>
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
                    pageCount={Math.ceil(filteredData.length / itemsPerPage)}
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
                <KakaoMap latitude={latitude} longitude={longitude} name={itemName} />
            </div>
        </div>
    </div>
  )
}
