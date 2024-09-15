import React, {useState} from 'react';
import './ListPage.style.css';
import {KakaoMap} from './component/KakaoMap';
import ReactPaginate from "react-paginate";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {useArtMuseum} from "../../hooks/useArtMuseum";
import NotFound from "../../components/NotFound";
import LoadingSpinner from "../../components/LoadingSpinner";

export const ListPage = () => {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useSearchParams();
  const category = query.get("category");
  const location = useLocation();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useArtMuseum({ page });
  const itemsPerPage = 10;

  // 카테고리 필터링
  const filteredData = data?.filter(
    (item) => category === "문화시설"
      ? item.카테고리3 === "미술관" || item.카테고리3 === "박물관"
      : item.카테고리3 === category
  ) || [];

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [itemName, setItemName] = useState(null);

  // 현재 페이지에 해당하는 데이터 가져오기
  const offset = page * itemsPerPage;
  const currentPageData = filteredData.slice(offset, offset + itemsPerPage);

  // 지도에 선택한 아이템 정보 업데이트
  const handleMap = (위도, 경도, 시설명) => {
    setLatitude(위도);
    setLongitude(경도);
    setItemName(시설명);
  };

  // 페이지 변경 처리
  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  if (isError) return <NotFound />;
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className='section max-w-[1200px] mx-auto my-[100px]'>
      <div className='w-full my-5 flex justify-between'>
        <p className="font-bold text-[24px] text-center">반려동물 동반시설 리스트</p>
        <button
          className="text-[white] p-2 px-3 rounded-[18px] bg-[#ff7336] text-white"
          onClick={() => navigate(-1)}
        >
          뒤로가기
        </button>
      </div>
      
      <div className="article">
        <div className="list-container h-[100vh] overflow-y-scroll">
          <div>
            {currentPageData.length > 0 ? (
              currentPageData.map((item, index) => (
                <div
                  className='item-box flex justify-end flex-col p-[12px] mb-2 rounded-[20px]'
                  key={index}
                  onClick={() => handleMap(item.위도, item.경도, item.시설명)}
                >
                  <p className="text-[22px] font-bold">{item["시설명"]}</p>
                  <p className="text-[16px]">{item["시군구 명칭"]}</p>
                  <p className="text-[16px]">{item["운영시간"]}</p>
                  <p className="text-[16px]">{item["휴무일"]}</p>
                </div>
              ))
            ) : (
              <p>해당 카테고리에 대한 시설이 없습니다.</p>
            )}
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
              forcePage={page}
            />
          </div>
        </div>
        
        <div className='map-container h-full'>
          {latitude && longitude && itemName ? (
            <KakaoMap latitude={latitude} longitude={longitude} name={itemName} />
          ) : (
            <p className="h-[150px] font-bold text-center text-[18px] content-center">지도를 보려면 시설을 선택하세요.</p>
          )}
        </div>
      </div>
    </div>
  );
};
