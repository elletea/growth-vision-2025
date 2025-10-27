'use client';

import { useState, useEffect } from 'react';
import Tiles from '@/components/icons/Tiles';
import SquareAi from '@/components/icons/SquareAi';

export default function Prototype() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 2, 100));
      }, 20);
      return () => clearTimeout(timer);
    } else {
      const transitionTimer = setTimeout(() => {
        setIsLoaded(true);
      }, 300);
      return () => clearTimeout(transitionTimer);
    }
  }, [progress]);

  if (isLoaded) {
    return (
      <div className="min-h-screen flex flex-col items-center bg-[#f7f7f7] relative animate-in fade-in duration-500">
        <div className="mt-[60px] w-10 h-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <img src="/square-logo.svg" alt="Square" className="w-full h-full" />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 -mt-20">
          <h1
            className="text-[48px] leading-[1.1] tracking-[-0.96px] text-black text-center max-w-[500px] mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150"
            style={{ fontFamily: 'ExactBlock, sans-serif' }}
          >
            Build and grow on your terms.
          </h1>

          <div className="bg-white rounded-3xl p-8 shadow-sm w-full max-w-[340px] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <h2
              className="text-[28px] leading-[1.2] text-black mb-6"
              style={{ fontFamily: 'ExactBlock, sans-serif' }}
            >
              Take a payment
            </h2>
            <p
              className="text-[16px] leading-[1.5] text-gray-500"
              style={{ fontFamily: 'CashSans, sans-serif' }}
            >
              Text goes here
            </p>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-center gap-6 bg-black rounded-full px-8 py-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Tiles size={24} color="white" />
          <SquareAi size={24} color="white" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] relative overflow-hidden rounded-[10px]">
      <div className="absolute left-1/2 top-[30px] -translate-x-1/2 w-6 h-6">
        <img src="/square-logo.svg" alt="Square" className="w-full h-full" />
      </div>

      <main className="text-center">
        <h1
          className="text-[32px] leading-[1.1] tracking-[-0.64px] text-black text-center w-[219px] mx-auto"
          style={{ fontFamily: 'ExactBlock, sans-serif' }}
        >
          Build and grow on your terms.
        </h1>
      </main>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-[76px] flex flex-col items-center gap-2">
        <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin" />
        <p
          className="text-[16px] leading-[24px] font-semibold text-black"
          style={{ fontFamily: 'CashSans, sans-serif' }}
        >
          {progress}%
        </p>
      </div>
    </div>
  );
}
