import React, { useState, useEffect } from 'react';
import NotFound from './NotFound';
import LoadingSpinner from './LoadingSpinner';
import { FaDoorOpen, FaLocationDot } from 'react-icons/fa6';
import { MdMuseum } from 'react-icons/md';
import MapUI from './MapUI';
import { useArtMuseum } from '../hooks/useArtMuseum';
import ReactPaginate from 'react-paginate';

export default function Sidebar() {
  const [page, setPage] = useState(0); // 페이지 번호는 0부터 시작
  const { data, isLoading, isError } = useArtMuseum();
  const [lat, setLat] = useState(33.450701);
  const [lng, setLng] = useState(126.570667);
  const [title, setTitle] = useState('KaKao');

  const itemsPerPage = 10; // 한 페이지에 보여줄 아이템 수

  // 조건에 맞는 항목만 필터링 (기본값 빈 배열 처리)
  const filteredData =
    data?.filter(
      (item) => item.카테고리3 === '미술관' || item.카테고리3 === '박물관'
    ) || [];

  // 현재 페이지에 해당하는 데이터만 가져오기
  const offset = page * itemsPerPage;
  const currentPageData = filteredData.slice(offset, offset + itemsPerPage);

  if (isError) return <NotFound />;
  if (isLoading) return <LoadingSpinner />;

  const handleLatLng = (lat, lng, title) => {
    setLat(lat);
    setLng(lng);
    setTitle(title);
  };

  const handlePageClick = ({ selected }) => {
    setPage(selected); // 페이지 번호 설정
  };

  return (
    <>
      <div className='main-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-screen'>
        <aside
          id='default-sidebar'
          className='list-section col-span-1 fixed md:static top-16 left-0 z-10 h-screen bg-gray-50 dark:bg-gray-800 px-3 py-4 overflow-y-auto'
          aria-label='Sidebar'
        >
          <ul className='space-y-2 font-medium '>
            {currentPageData.length > 0 ? (
              currentPageData.map((item, index) => (
                <li
                  key={index}
                  className='museum-list border-solid border-2 rounded-md my-2 p-4 w-full'
                  onClick={() =>
                    handleLatLng(item.위도, item.경도, item.시설명)
                  }
                >
                  <p>
                    <MdMuseum className='text-2xl' />
                  </p>
                  <p className='text-2xl text-extra'>{item.시설명}</p>
                  <div className='location-info flex items-center'>
                    <span className='mr-1'>
                      <FaLocationDot />
                    </span>
                    <span className='mr-1'>{item['시도 명칭']}</span>
                    <span>{item['시군구 명칭']}</span>
                  </div>
                  <div className='open-info flex items-center'>
                    <span className='mr-1'>
                      <FaDoorOpen />
                    </span>
                    <span>{item.운영시간}</span>
                  </div>
                  <div className='rest-info'>{item.휴무일}</div>
                </li>
              ))
            ) : (
              <p>미술관이나 박물관 정보가 없습니다.</p>
            )}
          </ul>
          <div>
            <ReactPaginate
              className='pagination'
              nextLabel='>'
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              marginPagesDisplayed={0}
              pageCount={Math.ceil(filteredData.length / itemsPerPage)} // 전체 페이지 수 계산
              previousLabel='<'
              pageClassName='page-item'
              pageLinkClassName='page-link'
              previousClassName='page-item'
              previousLinkClassName='page-link'
              nextClassName='page-item'
              nextLinkClassName='page-link'
              breakLabel='...'
              breakClassName='page-item'
              breakLinkClassName='page-link'
              containerClassName='pagination'
              activeClassName='active'
              renderOnZeroPageCount={null}
              forcePage={page} // 현재 페이지 번호 설정
            />
          </div>
        </aside>

        <div className='map-section' style={{ width: '100%', height: '600px' }}>
          <MapUI lat={lat} lng={lng} title={title} data={data} />{' '}
        </div>
      </div>
    </>
  );
}
