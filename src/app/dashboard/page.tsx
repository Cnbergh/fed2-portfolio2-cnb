import React from 'react';
import BgImg from '@/components/bg-img';
import Navbar from '@/components/navbar/navbar';


export default async function DashboardPage() {
  return (
    <div className='overflow-hidden '>
        <div className='z-10 p-1 text-white fixed'>
      <h1 className='text-3xl'>main page</h1>
      <Navbar/>
        </div>
    </div>
  );
}