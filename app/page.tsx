import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f7f7] p-8">
      <div className="mb-12">
        <img src="/square-logo.svg" alt="Square" className="w-10 h-10" />
      </div>

      <h1
        className="text-[48px] leading-[1.1] tracking-[-0.96px] text-black text-center mb-16"
        style={{ fontFamily: 'ExactBlock, sans-serif' }}
      >
        Growth Vision Prototypes
      </h1>

      <div className="grid gap-6 w-full max-w-2xl">
        <Link
          href="/learn-do-canvas"
          className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
        >
          <h2
            className="text-[28px] leading-[1.2] text-black mb-3"
            style={{ fontFamily: 'ExactBlock, sans-serif' }}
          >
            Learn & Do Canvas
          </h2>
          <p
            className="text-[16px] leading-[1.5] text-gray-500"
            style={{ fontFamily: 'CashSans, sans-serif' }}
          >
            Split-screen experience with education on the left and interactive demo on the right
          </p>
        </Link>

        <div className="bg-white/50 rounded-2xl p-8 border-2 border-dashed border-gray-200">
          <h2
            className="text-[28px] leading-[1.2] text-gray-400 mb-3"
            style={{ fontFamily: 'ExactBlock, sans-serif' }}
          >
            Coming soon
          </h2>
          <p
            className="text-[16px] leading-[1.5] text-gray-400"
            style={{ fontFamily: 'CashSans, sans-serif' }}
          >
            More explorations
          </p>
        </div>
      </div>
    </div>
  );
}
