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
      <TopNavigation onMenuClick={() => router.push('/settings')} />

      {/* Background Design */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base white background */}
        <div className="absolute inset-0 bg-white"></div>

        {/* Green gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/50 to-white/0"></div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-emerald-200/40 blur-2xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-emerald-300/40 blur-2xl"></div>

        {/* Wave pattern */}
        <div className="absolute bottom-0 left-0 w-full h-1/3">
          <svg className="w-full h-full" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 C150,50 350,150 500,100 C650,50 850,150 1000,100 L1000,200 L0,200 Z"
              fill="url(#waveGradient)" />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="mx-6 mt-16 mb-16">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Adam</h1>
            <p className="text-gray-600">Heres an overview of your finances today</p>
          </div>

          {/* Balance Card */}
          <div className="mb-8">
            <BalanceCard
              balance={1234.56}
              showBalance={showBalance}
              onToggleBalance={() => setShowBalance(!showBalance)}
            />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-sm text-gray-500">Monthly Savings</p>
              <p className="text-2xl font-semibold text-gray-900">£1,250</p>
              <p className="text-sm text-green-500">+12% vs last month</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-sm text-gray-500">Spending Trend</p>
              <p className="text-2xl font-semibold text-gray-900">£2,800</p>
              <p className="text-sm text-red-500">-5% vs last month</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <QuickActions />
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Salary Deposit</p>
                    <p className="text-sm text-gray-500">Today, 09:30 AM</p>
                  </div>
                </div>
                <p className="text-green-500 font-medium">+£3,500.00</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Grocery Shopping</p>
                    <p className="text-sm text-gray-500">Yesterday, 05:45 PM</p>
                  </div>
                </div>
                <p className="text-red-500 font-medium">-£85.20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
