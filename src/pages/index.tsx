import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [page, setPage] = useState('home');
  const reasons = [
    'Comprehensive Assessments: Evaluate key aspects of campus infrastructure, technology, and sustainability.',
    'Actionable Recommendations: Receive tailored recommendations to enhance campus smartness.',
    'Historical Data: Track progress over time with access to previous assessments.',
    'User-Friendly Interface: Enjoy a seamless and intuitive user experience.',
  ];
  return (
    <main className=' min-h-screen md:h-screen bg-graybg w-full px-8 md:px-0 pb-20'>
      <nav className='flex flex-col md:flex-row items-center md:justify-between gap-y-6 md:gap-y-0 px-10 md:px-32 py-10'>
        <h1 className=' text-4xl font-bold'>SCAS</h1>
        <div className='flex flex-row items-center  gap-x-4 md:gap-x-8 text-lg'>
          <h3
            className=' underline cursor-pointer'
            onClick={() => setPage('home')}
          >
            Home
          </h3>
          <h3
            className=' underline cursor-pointer'
            onClick={() => setPage('aboutUs')}
          >
            About us
          </h3>
          <Link href='/signin' legacyBehavior passHref>
            <a className=' text-black underline cursor-pointer'>Sign in</a>
          </Link>
        </div>
      </nav>
      <div className='flex flex-col justify-between items-center w-full md:mt-20'>
        {page === 'home' && (
          <div className=' w-full md:w-2/3 text-center'>
            <h1 className=' text-2xl md:text-3xl font-semibold text-black'>
              Welcome to the Smart Campus Assessment System
            </h1>
            <h3 className=' text-xl text-black mt-10 font-semibold'>
              Empowering Educational Institutions for a Smarter Future
            </h3>
            <p className=' text-base text-gray-700 mt-4'>
              Our innovative platform helps universities and colleges assess,
              enhance, and manage their campus infrastructure using advanced
              technology and data-driven insights.
            </p>
            <p className=' text-base text-gray-700 mt-2 font-semibold'>Get Started Today</p>
            <p className=' text-base text-gray-700 mt-2'>
              <Link href='/signin' legacyBehavior passHref>
                <a className=' text-black font-bold hover:underline cursor-pointer'>
                  Sign in
                </a>
              </Link>{' '}
              or{' '}
              <Link href='/signup' legacyBehavior passHref>
                <a className=' text-black font-bold hover:underline cursor-pointer'>
                  Sign up
                </a>
              </Link>{' '}
              now to begin your smart campus assessment and discover how you can
              pave the way to university smartness.
            </p>
          </div>
        )}
        {page === 'aboutUs' && (
          <div className=' w-full  md:w-2/3'>
            <h1 className='text-2xl font-semibold text-black text-center'>
              About us
            </h1>
            <div className='flex flex-col gap-y-1 mt-8'>
              <h1 className='text-xl text-black font-semibold'>
                Welcome to the Smart Campus Assessment System
              </h1>
              <p className='text-gray-800'>
                Our mission is to empower educational institutions to evaluate
                and enhance their smart campus infrastructure, ensuring a
                seamless and technology-driven learning environment for all.
              </p>
            </div>
            <div className='flex flex-col gap-y-1 mt-8'>
              <h1 className='text-xl text-black font-semibold'>Our Story</h1>
              <p className='text-gray-800'>
                The Smart Campus Assessment System was developed in response to
                the growing need for educational institutions to leverage
                technology for improved operational efficiency and enhanced
                learning experiences. Inspired by the advancements in smart
                technologies, our team set out to create a comprehensive tool
                for assessing and improving campus smartness.
              </p>
            </div>
            <div className='flex flex-col gap-y-1 mt-8'>
              <h1 className='text-xl text-black font-semibold'>
                Why Smart Campus Assessment System?
              </h1>
              <ul className='list-disc pl-5 text-gray-800'>
                {reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
