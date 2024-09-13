import React, { useState } from 'react'
import './ListPage.style.css';
import { usePetFriendlyFacility } from '../../hooks/usePetFriendlyFacility';
import { KakaoMap } from './component/KakaoMap';
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";

export const ListPage = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
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
    <div className='section'>
        <div className='list-container'>
          <p className="font-bold text-[24px] text-center">반려견 동반시설 리스트</p>
          <div>
            {data.data?.map((item, index) => {
              return(
                <div className='item-box' key={index} onClick={ () => handleMap(item.위도,item.경도)}>
                  <img src={process.env.PUBLIC_URL + '/icon/pet-list-icon.jpeg'} alt="일러스트" width={50} />
                  <p>시설명: {item.시설명}</p>
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
  )
}
