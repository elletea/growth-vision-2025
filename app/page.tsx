'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7]">
      <div className="text-center">
        <h1
          className="text-[48px] leading-[1.1] tracking-[-0.96px] text-black mb-8"
          style={{ fontFamily: 'ExactBlock, sans-serif' }}
        >
          Growth Vision 2025
        </h1>
        <Link
          href="/prototype"
          className="inline-block text-[16px] leading-[24px] font-semibold text-black hover:underline"
          style={{ fontFamily: 'CashSans, sans-serif' }}
        >
          One Block at a Time
        </Link>
      </div>
    </div>
  );
}
