export default function Home() {
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
          70%
        </p>
      </div>
    </div>
  );
}
