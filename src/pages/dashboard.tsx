import React from 'react';
import { Select } from '@mantine/core';

export default function Dashboard() {
  function HomeIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
        <polyline points='9 22 9 12 15 12 15 22' />
      </svg>
    );
  }

  function Package2Icon(props: any) {
    return (
      <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z' />
        <path d='m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9' />
        <path d='M12 3v6' />
      </svg>
    );
  }

  function PackageIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='m7.5 4.27 9 5.15' />
        <path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' />
        <path d='m3.3 7 8.7 5 8.7-5' />
        <path d='M12 22V12' />
      </svg>
    );
  }

  function SettingsIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
        <circle cx='12' cy='12' r='3' />
      </svg>
    );
  }

  function UsersIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
        <circle cx='9' cy='7' r='4' />
        <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
        <path d='M16 3.13a4 4 0 0 1 0 7.75' />
      </svg>
    );
  }

  function UserIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
        <circle cx='12' cy='7' r='4'></circle>
      </svg>
    );
  }

  function LogOutIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
        <polyline points='16 17 21 12 16 7' />
        <line x1='21' x2='9' y1='12' y2='12' />
      </svg>
    );
  }

  const universities = [
    'University of Dar es Salaam (UDSM)',
    'Sokoine University of Agriculture (SUA)',
    'Ardhi University (ARU)',
    'University of Dodoma (UDOM)',
    'Tumaini University Makumira',
    'Mzumbe University',
    'Nelson Mandela African Institute of Science and Technology (NM-AIST)',
    'Muhimbili University of Health and Allied Sciences (MUHAS)',
    'Ruaha Catholic University (RUCU)',
    'St. Augustine University of Tanzania (SAUT)',
    'Zanzibar University (ZU)',
    'University of Iringa',
    'Teofilo Kisanji University (TEKU)',
    'Tengeru Institute of Community Development (TICD)',
    'Hubert Kairuki Memorial University (HKMU)',
    'Jordan University College',
    'College of Business Education (CBE)',
    'Kampala International University in Tanzania (KIUT)',
    'Mwalimu Nyerere Memorial Academy (MNMA)',
    'Moshi Co-operative University (MoCU)',
  ];
  return (
    <div>
      <div className='grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]'>
        <div className='hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40'>
          <div className='flex flex-col gap-2'>
            <div className='flex h-[60px] items-center px-6'>
              <div className='flex items-center gap-2 font-semibold'>
                <Package2Icon className='h-6 w-6' />
                <span className=''>SCAS</span>
              </div>
            </div>
            <div className='flex-1'>
              <nav className='grid items-start px-4 text-sm font-medium'>
                <div className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 bg-gray-100'>
                  <HomeIcon className='h-4 w-4' />
                  Dashboard
                </div>
                <div className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'>
                  <UserIcon className='h-4 w-4' />
                  Admin
                </div>
                <div className='flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-500  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50'>
                  <PackageIcon className='h-4 w-4' />
                  Current assessment
                </div>
                <div className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'>
                  <PackageIcon className='h-4 w-4' />
                  Previous assessment
                </div>
                <div className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'>
                  <UsersIcon className='h-4 w-4' />
                  Recomendations
                </div>
                <div className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'>
                  <SettingsIcon className='h-4 w-4' />
                  Settings
                </div>
                <div className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'>
                  <LogOutIcon className='h-4 w-4' />
                  <span>Logout</span>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
            <div className='flex-1'>
              <h1 className='font-semibold text-lg'>Dashboard</h1>
            </div>
          </header>
          <div className=' py-10 px-20'>
            <div className=' lg:w-[70%] 2xl:w-[50%]'>
              <Select
                label='Select a University'
                placeholder='Pick one'
                data={universities}
                searchable
                nothingFoundMessage='No options'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
