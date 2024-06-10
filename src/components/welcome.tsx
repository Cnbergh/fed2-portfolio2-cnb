'use client'
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
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome</h1>
    </div>
  );
};

export default Welcome;