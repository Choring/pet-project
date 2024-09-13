import React, { useState, useEffect } from 'react';
import NotFound from './NotFound';
import LoadingSpinner from './LoadingSpinner';
import { MdMoney, MdMoneyOff, MdMuseum } from 'react-icons/md';
import { FaDoorOpen, FaLocationDot } from 'react-icons/fa6';
import { LuParkingCircle, LuParkingCircleOff } from 'react-icons/lu';
import MapUI from './MapUI';
import { useArtMuseum } from '../hooks/useArtMuseum';
import ReactPaginate from 'react-paginate';

export default function Sidebar({ filterMuseum }) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useArtMuseum({ page });
  const [lat, setLat] = useState(33.450701);
  const [lng, setLng] = useState(126.570667);
  const [title, setTitle] = useState('KaKao');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data?.data) {
      // 필터 적용
      const filtered = filterMuseum
        ? data.data.filter(
            (item) => item.카테고리3 === '미술관' || item.카테고리3 === '박물관'
          )
        : data.data;
      setFilteredData(filtered);
    }
  }, [data, filterMuseum]);

  if (isError) return <NotFound />;
  if (isLoading) return <LoadingSpinner />;

  const handleLatLng = (lat, lng, title) => {
    setLat(lat);
    setLng(lng);
    setTitle(title);
  };

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
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
            {filteredData.map((item, index) => (
              <li
                key={index}
                className='museum-list border-solid border-2 rounded-md my-2 p-4 w-full'
                onClick={() => handleLatLng(item.위도, item.경도, item.시설명)} // 클릭할 때 위도, 경도를 전달
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
                <div className='extra-info flex'>
                  {item['주차 가능여부'] === 'Y' ? (
                    <span>
                      <LuParkingCircle />
                    </span>
                  ) : (
                    <span>
                      <LuParkingCircleOff />
                    </span>
                  )}
                  {item['애견 동반 추가 요금'] === '없음' ? (
                    <span>
                      <MdMoneyOff />
                    </span>
                  ) : (
                    <span>
                      <MdMoney />
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div>
            <ReactPaginate
              className='pagination'
              nextLabel='>'
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              marginPagesDisplayed={0}
              pageCount={data?.totalCount || 0} // pageCount가 없을 경우 0으로 설정
              previousLabel='<'
              pageClassName='page-item'
              pageLinkClassName='page-link'
              previousClassName='page-item'
              previousLinkClassName='page-link'
              nextClassName='page-item'
              nextLinkClassName='page-link'
              breakLabel={false}
              breakClassName='page-item'
              breakLinkClassName='page-link'
              containerClassName='pagination'
              activeClassName='active'
              renderOnZeroPageCount={null}
              forcePage={page - 1}
            />
          </div>
        </aside>

        <div className='map-section' style={{ width: '100%', height: '600px' }}>
          <MapUI lat={lat} lng={lng} title={title} />{' '}
        </div>
      </div>
    </>
  );
}
