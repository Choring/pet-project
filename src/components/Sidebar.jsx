import React from 'react';
import { useArtQuery } from '../hooks/useArtData';
import NotFound from './NotFound';
import LoadingSpinner from './LoadingSpinner';
import { MdMoney, MdMoneyOff, MdMuseum } from 'react-icons/md';
import { FaDoorOpen, FaLocationDot } from 'react-icons/fa6';
import { LuParkingCircle, LuParkingCircleOff } from 'react-icons/lu';
import MapUI from './MapUI';

export default function Sidebar() {
  const { data, isLoading, isError, error } = useArtQuery();

  if (isError) return <NotFound />;
  if (isLoading) return <LoadingSpinner />;

  // 조건에 맞는 항목만 필터링
  const filteredData = data?.filter(
    (item) => item.카테고리3 === '미술관' || item.카테고리3 === '박물관'
  );
  console.log(filteredData);
  return (
    <>
      <button
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      >
        <span className='sr-only'>Open sidebar</span>
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>

      <div className='main-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-screen'>
        <aside
          id='default-sidebar'
          className='list-section col-span-1 fixed md:static top-16 left-0 z-10 h-screen bg-gray-50 dark:bg-gray-800 px-3 py-4 overflow-y-auto'
          aria-label='Sidebar'
        >
          <ul className='space-y-2 font-medium '>
            {filteredData?.map((item, index) => (
              <li
                key={index}
                className='border-solid border-2 rounded-md my-2 p-4 w-full'
              >
                <p>
                  <MdMuseum className='text-2xl' />
                </p>
                <p className='text-2xl text-extra'>{item.시설명}</p>
                <div className='location-info'>
                  <span className='mr-1'>
                    <FaLocationDot />
                  </span>
                  <span className='mr-1'>{item['시도 명칭']}</span>
                  <span>{item['시군구 명칭']}</span>
                </div>
                <div className='open-info'>
                  <span className='mr-1'>
                    <FaDoorOpen />
                  </span>
                  <span>{item.운영시간}</span>
                </div>
                <div className='rest-info'>{item.휴무일}</div>
                <div className='extra-info'>
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
        </aside>

        <div className='map-section col-span-1 lg:col-span-2 fixed md:static top-16 right-0 z-10 h-screen bg-white p-4'>
          <MapUI />
        </div>
      </div>
    </>
  );
}
