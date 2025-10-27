'use client';

import { useState } from 'react';
import Tiles from '@/components/icons/Tiles';
import FoodMenu from '@/components/icons/FoodMenu';
import Form from '@/components/icons/Form';
import Message from '@/components/icons/Message';
import Cash from '@/components/icons/Cash';
import Human from '@/components/icons/Human';
import HumanMultiple from '@/components/icons/HumanMultiple';
import ChartLine from '@/components/icons/ChartLine';
import Store from '@/components/icons/Store';
import SquareRegister from '@/components/icons/SquareRegister';

type CapabilityId = 'payments' | 'team' | 'customers' | 'cash-flow' | 'apps';

interface Capability {
  id: CapabilityId;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  label: string;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    id: 'payments',
    icon: Cash,
    label: 'Take payments',
    title: 'Take payments',
    description: 'Sell anything in person and online with a point of sale platform that works for whatever you sell.',
  },
  {
    id: 'team',
    icon: HumanMultiple,
    label: 'Manage your team',
    title: 'Manage your team',
    description: 'Add team members, set permissions, and track performance all in one place.',
  },
  {
    id: 'customers',
    icon: Human,
    label: 'Grow your customer base',
    title: 'Grow your customer base',
    description: 'Build lasting relationships with marketing tools, loyalty programs, and customer insights.',
  },
  {
    id: 'cash-flow',
    icon: ChartLine,
    label: 'Control your cash flow',
    title: 'Control your cash flow',
    description: 'Get insights into your business performance and access capital when you need it.',
  },
  {
    id: 'apps',
    icon: Store,
    label: 'Connect your favorite apps',
    title: 'Connect your favorite apps',
    description: 'Integrate with tools you already use to run your business more efficiently.',
  }
];

export default function LearnDoCanvas() {
  const [view, setView] = useState<'dashboard' | 'capability' | 'create-business'>('dashboard');
  const [selectedCapability, setSelectedCapability] = useState<CapabilityId>('payments');
  const [amount, setAmount] = useState('0');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [leftWidth, setLeftWidth] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#497472');

  const current = capabilities.find(c => c.id === selectedCapability)!;

  const handlePayment = () => {
    alert(`Payment processed!\nAmount: $${amount}\nEmail: ${email}\nNote: ${note}`);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const container = e.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const sidebarWidth = 80; // 20 * 4px
    const availableWidth = rect.width - sidebarWidth;
    const mouseX = e.clientX - rect.left - sidebarWidth;
    const percentage = (mouseX / availableWidth) * 100;
    setLeftWidth(Math.min(Math.max(percentage, 20), 80));
  };

  return (
    <div
      className="h-screen flex bg-[#f7f7f7]"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Left Sidebar */}
      <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-4">
        <div className="flex flex-col gap-4">
          <button
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${view === 'dashboard' ? 'bg-black' : 'hover:bg-gray-100'}`}
            onClick={() => setView('dashboard')}
          >
            <Tiles size={24} color={view === 'dashboard' ? '#fff' : '#666'} />
          </button>
          <button
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${view === 'capability' ? 'bg-black' : 'hover:bg-gray-100'}`}
            onClick={() => setView('capability')}
          >
            <Form size={24} color={view === 'capability' ? '#fff' : '#666'} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
            <Message size={24} color="#666" />
          </button>
        </div>

        <div className="flex-1" />

        <div className="flex flex-col gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.9918 3H6.00825C5.61324 2.9999 5.22207 3.07762 4.8571 3.22872C4.49213 3.37981 4.16049 3.60133 3.88114 3.88061C3.60179 4.1599 3.38019 4.49147 3.229 4.85641C3.07782 5.22135 3 5.61249 3 6.0075V17.991C3 18.7889 3.31692 19.5541 3.88105 20.1184C4.44519 20.6827 5.21034 20.9998 6.00825 21H17.9918C18.7897 20.9998 19.5548 20.6827 20.119 20.1184C20.6831 19.5541 21 18.7889 21 17.991V6.0075C21 5.61249 20.9222 5.22135 20.771 4.85641C20.6198 4.49147 20.3982 4.1599 20.1189 3.88061C19.8395 3.60133 19.5079 3.37981 19.1429 3.22872C18.7779 3.07762 18.3868 2.9999 17.9918 3ZM17.727 16.7783C17.727 17.0299 17.6271 17.2713 17.4492 17.4494C17.2713 17.6274 17.0299 17.7276 16.7782 17.7278H7.22325C7.0986 17.7278 6.97516 17.7032 6.86001 17.6555C6.74485 17.6077 6.64023 17.5378 6.55212 17.4496C6.46401 17.3614 6.39414 17.2567 6.3465 17.1416C6.29887 17.0264 6.2744 16.9029 6.2745 16.7783V7.2225C6.2744 7.09785 6.29887 6.97439 6.3465 6.8592C6.39414 6.74401 6.46401 6.63933 6.55212 6.55115C6.64023 6.46297 6.74485 6.39302 6.86001 6.34529C6.97516 6.29757 7.0986 6.273 7.22325 6.273H16.7782C17.0299 6.2732 17.2713 6.37332 17.4492 6.55137C17.6271 6.72941 17.727 6.97081 17.727 7.2225V16.7783Z" fill="#666"/>
              <path d="M10.0875 14.442C10.0158 14.442 9.94482 14.4278 9.87861 14.4003C9.8124 14.3728 9.75227 14.3325 9.70168 14.2817C9.65109 14.2309 9.61103 14.1706 9.5838 14.1043C9.55657 14.038 9.5427 13.9669 9.543 13.8953V10.0808C9.5426 10.009 9.55639 9.93787 9.58358 9.87146C9.61077 9.80505 9.65081 9.74467 9.70141 9.69379C9.75202 9.64291 9.81218 9.60253 9.87843 9.57498C9.94469 9.54743 10.0157 9.53325 10.0875 9.53325H13.9125C13.9842 9.53335 14.0552 9.5476 14.1214 9.57518C14.1877 9.60277 14.2478 9.64315 14.2984 9.69401C14.3489 9.74487 14.389 9.80521 14.4162 9.87158C14.4434 9.93794 14.4573 10.009 14.457 10.0808V13.8953C14.4572 13.9669 14.4433 14.0379 14.416 14.1042C14.3887 14.1705 14.3487 14.2307 14.2981 14.2815C14.2475 14.3323 14.1874 14.3726 14.1213 14.4001C14.0551 14.4277 13.9842 14.4419 13.9125 14.442H10.0875Z" fill="#666"/>
            </svg>
          </button>
        </div>

        <div className="flex-1" />

        <div className="flex flex-col gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
            <SquareRegister size={24} color="#666" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
            <Store size={24} color="#666" />
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setView('create-business')}
          >
            <span className="text-[24px] text-gray-400">+</span>
          </button>
        </div>
      </div>

      {view === 'dashboard' && (
        <div className="flex-1 bg-white overflow-y-auto">
          <div className="min-h-full flex items-center justify-center p-16">
            <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
            {/* Locations */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow aspect-square flex flex-col">
              <h3 className="text-[18px] font-medium mb-1" style={{ fontFamily: 'CashSans, sans-serif' }}>
                Locations
              </h3>
              <p className="text-[14px] text-gray-500" style={{ fontFamily: 'CashSans, sans-serif' }}>
                1
              </p>
              <div className="mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-[14px]" style={{ fontFamily: 'CashSans, sans-serif' }}>
                    St. James Street
                  </span>
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow aspect-square flex flex-col">
              <h3 className="text-[18px] font-medium mb-1" style={{ fontFamily: 'CashSans, sans-serif' }}>
                Items
              </h3>
              <p className="text-[14px] text-gray-500 mb-2" style={{ fontFamily: 'CashSans, sans-serif' }}>
                24 items
              </p>
              <div className="mt-auto">
                <div className="text-[14px] text-gray-500" style={{ fontFamily: 'CashSans, sans-serif' }}>
                  Running low
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[14px]" style={{ fontFamily: 'CashSans, sans-serif' }}>
                    Croissants
                  </span>
                  <span className="text-[14px] text-red-500 font-semibold" style={{ fontFamily: 'CashSans, sans-serif' }}>
                    2
                  </span>
                </div>
              </div>
            </div>

            {/* Reporting */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow aspect-square flex flex-col">
              <h3 className="text-[18px] font-medium mb-1" style={{ fontFamily: 'CashSans, sans-serif' }}>
                Reporting
              </h3>
              <p className="text-[14px] text-gray-500" style={{ fontFamily: 'CashSans, sans-serif' }}>
                12 reports
              </p>
            </div>

            {/* Staff */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow aspect-square flex flex-col">
              <h3 className="text-[18px] font-medium mb-1" style={{ fontFamily: 'CashSans, sans-serif' }}>
                Staff
              </h3>
              <p className="text-[14px] text-gray-500" style={{ fontFamily: 'CashSans, sans-serif' }}>
                5 team members
              </p>
            </div>

            {/* Customers */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow aspect-square flex flex-col">
              <h3 className="text-[18px] font-medium mb-1" style={{ fontFamily: 'CashSans, sans-serif' }}>
                Customers
              </h3>
              <p className="text-[14px] text-gray-500" style={{ fontFamily: 'CashSans, sans-serif' }}>
                4,301 actives
              </p>
            </div>

            {/* Money */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow aspect-square flex flex-col">
              <h3 className="text-[18px] font-medium mb-1" style={{ fontFamily: 'CashSans, sans-serif' }}>
                Money
              </h3>
            </div>

            {/* Add new tile */}
            <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-6 flex items-center justify-center hover:border-gray-300 transition-colors cursor-pointer aspect-square">
              <span className="text-[32px] text-gray-300">+</span>
            </div>
          </div>
          </div>
        </div>
      )}

      {view === 'capability' && (
        <>
          {/* Learn Canvas */}
          <div className="bg-white flex flex-col overflow-hidden" style={{ width: `${leftWidth}%` }}>
        <div className="px-12 pt-10 pb-6">
          <p
            className="text-[12px] tracking-[1px] text-[#959595] mb-6"
            style={{ fontFamily: 'CashSans, sans-serif', fontWeight: 500 }}
          >
            CAPABILITIES &gt; PAYMENTS
          </p>

          <h1
            className="text-[20px] leading-normal text-black mb-2"
            style={{ fontFamily: 'CashSans, sans-serif', fontWeight: 500 }}
          >
            {current.title}
          </h1>
          <p
            className="text-[18px] leading-[1.5] text-black"
            style={{ fontFamily: 'CashSans, sans-serif' }}
          >
            {current.description}
          </p>
        </div>

        {/* Capability List */}
        <div className="px-12 mt-auto pb-8">
          <div className="space-y-5">
            {capabilities.filter(c => c.id !== selectedCapability).map((capability) => {
              return (
                <button
                  key={capability.id}
                  onClick={() => setSelectedCapability(capability.id)}
                  className="block text-left"
                >
                  <p
                    className="text-[20px] leading-normal text-[#666666] hover:text-black transition-colors"
                    style={{ fontFamily: 'CashSans, sans-serif', fontWeight: 500 }}
                  >
                    {capability.label}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Action Canvas */}
      <div className="flex-1 bg-[#f7f7f7] overflow-hidden relative">
        <div className="h-full flex items-center justify-center p-3">
          {/* Content Area with border and rounded corners */}
          <div className="bg-[#fdfdfd] border border-[rgba(0,0,0,0.05)] rounded-[32px] h-[calc(100%-24px)] w-full flex items-center justify-center p-14 relative">
            {/* Drag Handle - floating over the box */}
            <div
              className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-gray-400/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center cursor-col-resize hover:bg-gray-500/80 transition-colors z-20"
              onMouseDown={handleMouseDown}
            >
              <div className="w-0.5 h-6 bg-white/60 rounded-full" />
            </div>
            {selectedCapability === 'payments' && (
              <div className="bg-white border border-[#333333] rounded-[20px] p-12 flex items-center justify-center shadow-sm overflow-hidden" style={{ height: '560px', width: '100%', maxWidth: '600px' }}>
                <div className="bg-gradient-to-br from-emerald-900 via-teal-800 to-yellow-700 absolute inset-0 rounded-[20px]" />
                <div className="w-full relative z-10">
                  <div className="text-center mb-12">
                    <div
                      className="text-[90px] leading-none text-white font-medium"
                      style={{ fontFamily: 'CashSans, sans-serif' }}
                    >
                      ${amount}
                    </div>
                  </div>

                  <div className="space-y-5">
                    <input
                      type="text"
                      placeholder="Recipient's email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-[20px] text-white placeholder-white/60 text-[16px] focus:outline-none focus:ring-2 focus:ring-white/40"
                      style={{ fontFamily: 'CashSans, sans-serif' }}
                    />

                    <input
                      type="text"
                      placeholder="What's it for?"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-[20px] text-white placeholder-white/60 text-[16px] focus:outline-none focus:ring-2 focus:ring-white/40"
                      style={{ fontFamily: 'CashSans, sans-serif' }}
                    />

                    <div className="flex gap-3 pt-8">
                      <button className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/20 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="2" width="6" height="6" fill="white" />
                          <rect x="12" y="2" width="6" height="6" fill="white" />
                          <rect x="2" y="12" width="6" height="6" fill="white" />
                          <rect x="14" y="14" width="2" height="2" fill="white" />
                          <rect x="12" y="12" width="2" height="2" fill="white" />
                          <rect x="16" y="12" width="2" height="2" fill="white" />
                          <rect x="12" y="16" width="2" height="2" fill="white" />
                        </svg>
                      </button>
                      <button
                        onClick={handlePayment}
                        className="flex-1 px-8 py-3 bg-white text-black rounded-full text-[16px] font-semibold hover:bg-white/90 transition-colors"
                        style={{ fontFamily: 'CashSans, sans-serif' }}
                      >
                        Take payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedCapability !== 'payments' && (
              <div className="bg-white border border-[#333333] rounded-[20px] p-12 flex items-center justify-center text-center shadow-sm overflow-hidden" style={{ height: '560px', width: '100%', maxWidth: '600px' }}>
                <div className="bg-gradient-to-br from-emerald-900 via-teal-800 to-yellow-700 absolute inset-0 rounded-[20px]" />
                <div className="relative z-10">
                  <p
                    className="text-white/50 text-[18px]"
                    style={{ fontFamily: 'CashSans, sans-serif' }}
                  >
                    Interactive demo coming soon
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
        </>
      )}

      {view === 'create-business' && (
        <div className="flex-1 bg-white overflow-y-auto">
          <div className="min-h-full flex items-center justify-center p-16">
            <div className="flex flex-col gap-[100px] items-center">
              {/* Brand customization section */}
              <div className="flex flex-col gap-[30px] items-center">
                {/* Placeholder for seller brand */}
                <div
                  className="h-[300px] w-[239px] rounded-[32px] border border-gray-200 transition-colors duration-300"
                  style={{ backgroundColor: selectedColor }}
                />

                {/* Color palette selector */}
                <div className="flex gap-[20px] items-center">
                  <div className="flex gap-[10px] items-center">
                    <button
                      className="w-[24px] h-[24px] bg-[#497472] rounded-full hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 transition-all"
                      onClick={() => setSelectedColor('#497472')}
                    />
                    <button
                      className="w-[24px] h-[24px] bg-[#ceade3] rounded-full hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 transition-all"
                      onClick={() => setSelectedColor('#ceade3')}
                    />
                    <button
                      className="w-[24px] h-[24px] bg-[#2a58b5] rounded-full hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 transition-all"
                      onClick={() => setSelectedColor('#2a58b5')}
                    />
                    <button
                      className="w-[24px] h-[24px] bg-[#f1a056] rounded-full hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 transition-all"
                      onClick={() => setSelectedColor('#f1a056')}
                    />
                    <button
                      className="w-[20px] h-[20px] bg-white border-2 border-white rounded-full hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 transition-all"
                      onClick={() => setSelectedColor('#ffffff')}
                    />
                  </div>
                  <div className="h-0 w-[34px] border-t border-gray-200" />
                  <button className="w-[24px] h-[24px] rounded-full overflow-hidden hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 transition-all flex items-center justify-center">
                    <span className="text-[14px] text-gray-400">+</span>
                  </button>
                </div>
              </div>

              {/* Demo businesses section */}
              <div className="flex flex-col gap-[20px] items-center">
                <p className="text-[14px] text-gray-500" style={{ fontFamily: 'CashSans, sans-serif' }}>
                  Or start with a demo business
                </p>
                <div className="flex gap-[30px] items-center">
                  {/* Burger Joint Bistro */}
                  <button className="flex flex-col gap-[10px] items-start hover:opacity-80 transition-opacity">
                    <div className="h-[203px] w-[162px] bg-[#ff87be] rounded-[8px] overflow-hidden flex items-center justify-center">
                      <div className="text-[48px]">🍔</div>
                    </div>
                    <div className="flex flex-col items-start leading-[1.5]">
                      <p className="text-[8px] text-gray-500 tracking-wider" style={{ fontFamily: 'CashSans, sans-serif' }}>
                        FOOD & BEVERAGE
                      </p>
                      <p className="text-[10px] text-black font-semibold" style={{ fontFamily: 'CashSans, sans-serif' }}>
                        Burger Joint Bistro
                      </p>
                    </div>
                  </button>

                  {/* Salon Berry */}
                  <button className="flex flex-col gap-[10px] items-start hover:opacity-80 transition-opacity">
                    <div className="h-[203px] w-[162px] bg-[#4d00ff] rounded-[8px] overflow-hidden flex items-center justify-center">
                      <div className="text-[48px]">✋</div>
                    </div>
                    <div className="flex flex-col items-start leading-[1.5]">
                      <p className="text-[8px] text-gray-500 tracking-wider" style={{ fontFamily: 'CashSans, sans-serif' }}>
                        BEAUTY
                      </p>
                      <p className="text-[10px] text-black font-semibold" style={{ fontFamily: 'CashSans, sans-serif' }}>
                        Salon Berry
                      </p>
                    </div>
                  </button>

                  {/* Retro Vintage */}
                  <button className="flex flex-col gap-[10px] items-start hover:opacity-80 transition-opacity">
                    <div className="h-[203px] w-[162px] bg-blue-600 rounded-[8px] overflow-hidden flex items-center justify-center">
                      <div className="text-[48px]">🎨</div>
                    </div>
                    <div className="flex flex-col items-start leading-[1.5]">
                      <p className="text-[8px] text-gray-500 tracking-wider" style={{ fontFamily: 'CashSans, sans-serif' }}>
                        RETAIL
                      </p>
                      <p className="text-[10px] text-black font-semibold" style={{ fontFamily: 'CashSans, sans-serif' }}>
                        Retro Vintage
                      </p>
                    </div>
                  </button>

                  {/* Wolfie Wolves */}
                  <button className="flex flex-col gap-[10px] items-start hover:opacity-80 transition-opacity">
                    <div className="h-[203px] w-[162px] bg-[#224d2e] rounded-[8px] overflow-hidden flex items-center justify-center">
                      <div className="text-[48px]">🍀</div>
                    </div>
                    <div className="flex flex-col items-start leading-[1.5]">
                      <p className="text-[8px] text-gray-500 tracking-wider" style={{ fontFamily: 'CashSans, sans-serif' }}>
                        SERVICES
                      </p>
                      <p className="text-[10px] text-black font-semibold" style={{ fontFamily: 'CashSans, sans-serif' }}>
                        Wolfie Wolves
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
