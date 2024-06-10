import BgImg from '@/components/bg-img';
import React from 'react';


export default async function DashboardPage() {
  return (
    <main className='overflow-hidden '>
        <BgImg/>
        <div className='z-10 p-1 text-white fixed'>
      <h1 className='text-3xl'>selected work</h1>
        </div>
    </main>
  );
}