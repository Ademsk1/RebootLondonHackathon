import { useState } from 'react'

interface BalanceCardProps {
  balance: number
  showBalance: boolean
  onToggleBalance: () => void
}

export default function BalanceCard({ balance, showBalance, onToggleBalance }: BalanceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Current Balance</h2>
          <p className="text-3xl font-bold text-slate-200 mt-2">
            {showBalance ? `£${balance.toFixed(2)}` : '••••••'}
          </p>
        </div>
        <button
          onClick={onToggleBalance}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {showBalance ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
  )
} 