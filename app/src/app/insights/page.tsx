'use client'

import { useState, useRef } from 'react'
import TopNavigation from '@/components/TopNavigation'
import Layout from '@/components/Layout'
import { useRouter } from 'next/navigation'

export default function Insights() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const insights = [
    {
      title: 'Monthly Spending',
      value: '£1,234',
      change: '+12%',
      period: 'vs last month',
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Top Category',
      value: 'Shopping',
      change: '£456',
      period: 'this month',
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: 'Savings Rate',
      value: '15%',
      change: '+3%',
      period: 'vs last month',
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const currentX = e.touches[0].clientX
    const diff = startX - currentX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left
        setCurrentSlide((prev) => (prev + 1) % insights.length)
      } else {
        // Swipe right
        setCurrentSlide((prev) => (prev - 1 + insights.length) % insights.length)
      }
      setIsDragging(false)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <Layout>
      {/* Top Navigation */}
      <TopNavigation onMenuClick={() => router.push('/')} />

      {/* Insights Content */}
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex flex-col">
          <div className="mx-6 mt-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Insights</h1>

            {/* Carousel */}
            <div
              className="relative h-[70vh]"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              ref={carouselRef}
            >
              {/* Carousel Slides */}
              <div className="overflow-hidden h-full">
                <div
                  className="flex h-full transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {insights.map((insight, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col justify-center"
                    >
                      <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900">{insight.title}</h2>
                        <div className="rounded-full bg-slate-200 p-3">
                          {insight.icon}
                        </div>
                      </div>
                      <div className="text-5xl font-bold text-gray-900 mb-4">{insight.value}</div>
                      <div className="flex items-center text-lg text-gray-500">
                        <span className={insight.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                          {insight.change}
                        </span>
                        <span className="ml-2">{insight.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {insights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-slate-200' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 