'use client'

import { useState } from 'react'

export default function Home() {
  const [balance] = useState(1250.50)
  const [showBalance, setShowBalance] = useState(true)

  return (
    <div className="min-h-screen bg-slate-100 text-black pb-20">
      {/* Header */}
      <header className="p-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
        <p className="text-gray-600">Current Account</p>
      </header>

      {/* Balance Card */}
      <div className="mx-6 mt-4 rounded-2xl bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-gray-600">Available Balance</h2>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="text-gray-500"
          >
            {showBalance ? 'Hide' : 'Show'}
          </button>
        </div>
        <div className="mt-4">
          {showBalance ? (
            <p className="text-4xl font-bold text-[#00447C]">
              £{balance.toLocaleString('en-GB', { minimumFractionDigits: 2 })}
            </p>
          ) : (
            <p className="text-4xl font-bold text-[#00447C]">••••••</p>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mx-6 mt-8 grid grid-cols-4 gap-4">
        <button className="flex flex-col items-center text-gray-900">
          <div className="mb-2 rounded-full bg-slate-200 p-3">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-sm">Pay</span>
        </button>
        <button className="flex flex-col items-center text-gray-900">
          <div className="mb-2 rounded-full bg-slate-200 p-3">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
          <span className="text-sm">Transfer</span>
        </button>
        <button className="flex flex-col items-center text-gray-900">
          <div className="mb-2 rounded-full bg-slate-200 p-3">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <span className="text-sm">Cards</span>
        </button>
        <button className="flex flex-col items-center text-gray-900">
          <div className="mb-2 rounded-full bg-slate-200 p-3">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-sm">More</span>
        </button>
      </div>

      {/* Recent Transactions */}
      <div className="mx-6 mt-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Recent Transactions</h2>
        <div className="rounded-2xl bg-white p-4">
          <div className="flex items-center justify-between border-b border-gray-100 py-3">
            <div>
              <p className="font-medium text-gray-800">Tesco</p>
              <p className="text-sm text-gray-500">Today, 14:30</p>
            </div>
            <p className="font-medium text-red-500">-£25.40</p>
          </div>
          <div className="flex items-center justify-between border-b border-gray-100 py-3">
            <div>
              <p className="font-medium text-gray-800">Salary</p>
              <p className="text-sm text-gray-500">Yesterday</p>
            </div>
            <p className="font-medium text-green-500">+£2,500.00</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="grid grid-cols-5 h-16">
          <button className="flex flex-col items-center justify-center text-[#00447C]">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center justify-center text-gray-500">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="text-xs mt-1">Apply</span>
          </button>
          <button className="flex flex-col items-center justify-center text-gray-500">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs mt-1">Payments</span>
          </button>
          <button className="flex flex-col items-center justify-center text-gray-500">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-xs mt-1">Search</span>
          </button>
          <button className="flex flex-col items-center justify-center text-gray-500">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="text-xs mt-1">Cards</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
