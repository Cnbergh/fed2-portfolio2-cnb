'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Welcome = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen w-screen text-[60px] sm:text-[100px] md:text-[200px] lg:text-[300px]">
      <div className="transparent-text min-w-full min-h-full items-center justify-center flex">
        Welcome
      </div>
    </div>
  );
};

export default Welcome;
