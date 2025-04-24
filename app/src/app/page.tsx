'use client'

import { useState } from 'react'
import BalanceCard from '@/components/BalanceCard'
import QuickActions from '@/components/QuickActions'
import TopNavigation from '@/components/TopNavigation'
import Layout from '@/components/Layout'

export default function Home() {
  const [showBalance, setShowBalance] = useState(true)

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
              <div className="bg-slate-200 border-4 border-red-500/80 rounded-lg px-6 py-4 text-black backdrop-blur-sm">
                <p className="text-sm font-medium">Over Budget</p>
              </div>
              <div className="bg-slate-200 border-4 border-green-500/80 rounded-lg px-6 py-4 text-black backdrop-blur-sm">
                <p className="text-sm font-medium">Savings Goal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
