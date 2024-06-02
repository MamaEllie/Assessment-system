import React, { useEffect, useState } from 'react';
import { Assessments, CreateAssessment } from '@/components';
import { useRouter } from 'next/router';
import { CurrentAssessment } from '@/components/dashboard/currentAssessment';

export default function Dashboard() {
  const [page, setPage] = useState('Dashboard');
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const menus = [
    {
      name: 'Dashboard',
      icon: <HomeIcon className='h-4 w-4' />,
    },
    {
      name: 'Admin',
      icon: <UserIcon className='h-4 w-4' />,
    },
    {
      name: 'Current assessment',
      icon: <PackageIcon className='h-4 w-4' />,
    },
    {
      name: 'Previous assessment',
      icon: <PackageIcon className='h-4 w-4' />,
    },
    {
      name: 'Recomendations',
      icon: <UsersIcon className='h-4 w-4' />,
    },
    // {
    //   name: 'Settings',
    //   icon: <SettingsIcon className='h-4 w-4' />,
    // },
    {
      name: 'Logout',
      icon: <LogOutIcon className='h-4 w-4' />,
    },
  ];
  function handleMenuOption(menu: string) {
    if (menu === 'Logout') {
      router.push('/');
    } else {
      setPage(menu);
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('userInfo');
    setUser(JSON.parse(user as string));
  }, []);

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
                {menus.map((menu) => (
                  <div
                    className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:bg-gray-200 cursor-pointer'
                    key={menu.name}
                    onClick={() => handleMenuOption(menu.name)}
                  >
                    {menu.icon}
                    {menu.name}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
            <div className='flex flex-row items-center justify-between w-full'>
              <h1 className='font-semibold text-lg'>{page}</h1>
              {user && (
                <div className='flex flex-row items-center gap-x-4'>
                  <div className='text-base font-semibold px-2 py-1.5 rounded-full bg-white border-[1px] border-gray-500'>
                    {user.firstName.charAt(0)}
                    {user.lastName.charAt(0)}
                  </div>
                  <h1 className=' text-lg font-semibold '>
                    {user.firstName} {user.lastName}
                  </h1>
                </div>
              )}
            </div>
          </header>
          <div className=' py-10 px-20'>
            {page === 'Dashboard' && (
              <div className=' w-full'>
                <Assessments />
              </div>
            )}
            {page === 'Admin' && (
              <div className='w-1/2'>
                <CreateAssessment />
              </div>
            )}
            {page === 'Current assessment' && (
              <div className='w-2/3'>
                <CurrentAssessment />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

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
