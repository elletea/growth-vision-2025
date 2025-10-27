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
  const [view, setView] = useState<'dashboard' | 'capability'>('dashboard');
  const [selectedCapability, setSelectedCapability] = useState<CapabilityId>('payments');
  const [amount, setAmount] = useState('0');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [leftWidth, setLeftWidth] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);

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
      <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-4 gap-2">
        <div className="flex flex-col gap-2 mb-auto">
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${view === 'dashboard' ? 'bg-black' : 'hover:bg-gray-100'}`}
            onClick={() => setView('dashboard')}
          >
            <Tiles size={24} color={view === 'dashboard' ? '#fff' : '#000'} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
            <FoodMenu size={24} color="#000" />
          </button>
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${view === 'capability' ? 'bg-black' : 'hover:bg-gray-100'}`}
            onClick={() => setView('capability')}
          >
            <Form size={24} color={view === 'capability' ? '#fff' : '#000'} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
            <Message size={24} color="#000" />
          </button>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
            <SquareRegister size={24} color="#666" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
            <Store size={24} color="#666" />
          </button>
          <div className="w-8 h-10 bg-[#224d2e] rounded-lg flex items-center justify-center mt-2">
            <div className="w-5 h-5 bg-white/20" style={{
              WebkitMaskImage: 'url(/square-logo.svg)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center'
            }} />
          </div>
        </div>
      </div>

      {view === 'dashboard' && (
        <div className="flex-1 bg-white flex items-center justify-center p-12">
          <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
            {/* Locations */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow aspect-square flex flex-col">
              <h3 className="text-[18px] font-medium mb-1" style={{ fontFamily: 'CashSans, sans-serif' }}>
                Locations
              </h3>
              <p className="text-[14px] text-gray-500" style={{ fontFamily: 'CashSans, sans-serif' }}>
                1
              </p>
              <div className="mt-8">
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
              <div className="mt-8">
                <div className="text-[14px] text-gray-600" style={{ fontFamily: 'CashSans, sans-serif' }}>
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
        <div className="h-full flex items-center justify-center p-12 pl-6">
          {/* Drag Handle */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-16 bg-white rounded-r-lg shadow-sm flex items-center justify-center cursor-col-resize hover:bg-gray-50 transition-colors z-10"
            onMouseDown={handleMouseDown}
          >
            <div className="w-1 h-8 bg-gray-300 rounded-full" />
          </div>
          {selectedCapability === 'payments' && (
            <div className="w-full max-w-md bg-gradient-to-br from-emerald-900 via-teal-800 to-yellow-700 rounded-[32px] p-12 flex items-center justify-center shadow-lg" style={{ height: '560px' }}>
              <div className="w-full">
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
                      <Tiles size={20} color="#fff" />
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
            <div className="w-full max-w-md bg-gradient-to-br from-emerald-900 via-teal-800 to-yellow-700 rounded-[32px] p-12 flex items-center justify-center text-center shadow-lg" style={{ height: '560px' }}>
              <div>
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
        </>
      )}
    </div>
  );
}
