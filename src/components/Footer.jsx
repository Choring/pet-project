import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='w-full p-4 bg-[white] border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2024{' '}
        <a href='https://flowbite.com/' className='hover:underline'>
          Noona React Study
        </a>
        . All Rights Reserved.
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
        <li>
          <Link href='#' className='hover:underline me-4 md:me-6 text-bold'>
            이용약관
          </Link>
        </li>
        <li>
          <Link href='#' className='hover:underline me-4 md:me-6 text-bold'>
            전가금거래 이용약관
          </Link>
        </li>

        <li>
          <Link href='#' className='hover:underline text-bold'>
            개인정보 처리방침
          </Link>
        </li>
      </ul>
    </footer>
  );
}
