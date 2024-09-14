import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ setFilterMuseum, setPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // 활성화된 링크 상태 추가
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 링크 클릭 시 활성화된 링크 상태 업데이트
  const handleLinkClick = (index) => {
    setActiveLink(index);
    setIsMenuOpen(false); // 모바일 메뉴가 열려 있으면 닫기
  };

  return (
    <>
    
      <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link
            className='flex items-center space-x-3 rtl:space-x-reverse'
            to={'/'}
          >
            <img
              src='https://flowbite.com/docs/images/logo.svg'
              className='h-8 navbar-logo'
              alt='Flowbite Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              펫과함께
            </span>
          </Link>
          <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
            <button
              data-collapse-toggle='navbar-sticky'
              type='button'
              className='navbar-mobile-btn inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-sticky'
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                className='h-8'
                alt='Flowbite Logo'
              />
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                펫과함께
              </span>
            </button>
            <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
              <button
                data-collapse-toggle='navbar-sticky'
                type='button'
                className='navbar-mobile-btn inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                aria-controls='navbar-sticky'
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 17 14'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 1h15M1 7h15M1 13h15'
                  />
                </svg>
              </button>
            </div>
            <div
              className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                isMenuOpen ? '' : 'hidden'
              }`}
              id='navbar-sticky'
            >
            </div>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? '' : 'hidden'
            }`}
            id='navbar-sticky'
          >
            <ul className='navbar-mobile-menu flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <Link
                  className={`block py-2 px-3 text-gray-900 rounded ${
                    activeLink === 0
                      ? 'bg-[#ff7336] text-white'
                      : 'hover:bg-[#ff7336] hover:text-white md:hover:bg-transparent md:hover:text-[#ff7336] dark:text-white dark:hover:bg-[#ff7336] dark:hover:text-white'
                  }`}
                  aria-current='page'
                  to={'/'}
                >
                  메인
                </Link>
              </li>
              <li>
                <Link
                  className={`block py-2 px-3 text-gray-900 rounded ${
                    activeLink === 1
                      ? 'bg-[#ff7336] text-white'
                      : 'hover:bg-[#ff7336] hover:text-white md:hover:bg-transparent md:hover:text-[#ff7336] dark:text-white dark:hover:bg-[#ff7336] dark:hover:text-white'
                  }`}
                  to={'/list?category=병원'}
                >
                  병원
                </Link>
              </li>
              <li>
                <Link
                  className={`block py-2 px-3 text-gray-900 rounded ${
                    activeLink === 2
                      ? 'bg-[#ff7336] text-white'
                      : 'hover:bg-[#ff7336] hover:text-white md:hover:bg-transparent md:hover:text-[#ff7336] dark:text-white dark:hover:bg-[#ff7336] dark:hover:text-white'
                  }`}
                  to={'/list?category=카페'}
                >
                  카페
                </Link>
              </li>
              <li>
                <Link
                  className={`art-museum-btn block py-2 px-3 text-gray-900 rounded ${
                    activeLink === 3
                      ? 'bg-[#ff7336] text-white'
                      : 'hover:bg-[#ff7336] hover:text-white md:hover:bg-transparent md:hover:text-[#ff7336] dark:text-white dark:hover:bg-[#ff7336] dark:hover:text-white'
                  }`}
                  to={'/list?category=문화시설'}
                >
                  문화시설
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
