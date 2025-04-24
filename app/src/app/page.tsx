'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import BalanceCard from '@/components/BalanceCard'
import QuickActions from '@/components/QuickActions'
import TopNavigation from '@/components/TopNavigation'
import Layout from '@/components/Layout'

export default function Home() {
  const [showBalance, setShowBalance] = useState(true)
  const router = useRouter()

  return (
    <Layout>
      {/* Top Navigation */}
      <TopNavigation />

      {/* Main Content */}
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          <div className="mx-6">
            {/* Balance Card */}
            <BalanceCard
              balance={1234.56}
              showBalance={showBalance}
              onToggleBalance={() => setShowBalance(!showBalance)}
            />

            {/* Quick Actions */}
            <div className="mt-12">
              <QuickActions />
            </div>

            {/* Pill Boxes */}
            <div className="mt-8 flex space-x-4">
              <button
                onClick={() => router.push('/insights')}
                className="bg-slate-200 border-4 border-red-500/80 rounded-lg px-6 py-2 text-black backdrop-blur-sm hover:bg-slate-300 transition-colors"
              >
                <p className="text-sm font-medium">Costa / Sleep</p>
              </button>
              <button
                onClick={() => router.push('/insights')}
                className="bg-slate-200 border-4 border-green-500/80 rounded-lg px-6 py-4 text-black backdrop-blur-sm hover:bg-slate-300 transition-colors"
              >
                <p className="text-sm font-medium">BPM / Spending </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
