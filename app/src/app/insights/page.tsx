'use client'

import { useState, useRef, useEffect } from 'react'
import TopNavigation from '@/components/TopNavigation'
import Layout from '@/components/Layout'
import { useRouter } from 'next/navigation'
import PlotGraph from '@/components/PlotGraph'

interface DataPoint {
  x: string
  y: number
}

interface GraphData {
  product: string
  correlation: string
  coefficient: number
  indicator: string
  metadata: {
    xlabel: string
    line1: string
    line2: string
  }
  line1: DataPoint[]
  line2: DataPoint[]
}

export default function Insights() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [sleepData, setSleepData] = useState<GraphData | null>(null)
  const [bpmData, setBpmData] = useState<GraphData | null>(null)
  const [loading, setLoading] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'http://20.254.22.18:9090'
        const [sleepResponse, bpmResponse] = await Promise.all([
          fetch(`${apiUrl}/api/sleep`),
          fetch(`${apiUrl}/api/hrv`)
        ])

        const [sleepJson, bpmJson] = await Promise.all([
          sleepResponse.json(),
          bpmResponse.json()
        ])

        setSleepData(sleepJson[0])
        setBpmData(bpmJson[0])
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const insights = [
    {
      title: 'Sleep & Spending',
      value: sleepData ? `${sleepData.coefficient.toFixed(2)}` : 'Loading...',
      change: sleepData ? sleepData.correlation : '',
      period: sleepData ? `vs ${sleepData.product}` : '',
      data: sleepData,
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    {
      title: 'Heart Rate & Spending',
      value: bpmData ? `${bpmData.coefficient.toFixed(2)}` : 'Loading...',
      change: bpmData ? bpmData.correlation : '',
      period: bpmData ? `vs ${bpmData.product}` : '',
      data: bpmData,
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Combined Insights',
      value: sleepData && bpmData ?
        `${((sleepData.coefficient + bpmData.coefficient) / 2).toFixed(2)}` :
        'Loading...',
      change: 'Overall',
      period: 'Correlation',
      data: null,
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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

  if (loading) {
    return (
      <Layout>
        <TopNavigation onMenuClick={() => router.push('/')} />
        <div className="h-screen flex items-center justify-center">
          <div className="text-xl text-gray-600">Loading insights...</div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      {/* Top Navigation */}
      <TopNavigation onMenuClick={() => router.push('/')} />

      {/* Insights Content */}
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex flex-col">
          <div className="mx-6 mt-16 mb-16">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Insights</h1>
              <p className="text-gray-600">Discover how your lifestyle affects your spending patterns</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-sm text-gray-500">Sleep Correlation</p>
                {isLoading ? (
                  <div className="flex justify-center items-center h-8">
                    <div className="w-5 h-5 border-2 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <p className="text-2xl font-semibold text-gray-900">
                    {sleepData ? `${sleepData.coefficient.toFixed(2)}` : '-'}
                  </p>
                )}
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-sm text-gray-500">Heart Rate Correlation</p>
                {isLoading ? (
                  <div className="flex justify-center items-center h-8">
                    <div className="w-5 h-5 border-2 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <p className="text-2xl font-semibold text-gray-900">
                    {bpmData ? `${bpmData.coefficient.toFixed(2)}` : '-'}
                  </p>
                )}
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-sm text-gray-500">Overall Impact</p>
                {isLoading ? (
                  <div className="flex justify-center items-center h-8">
                    <div className="w-5 h-5 border-2 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <p className="text-2xl font-semibold text-gray-900">
                    {sleepData && bpmData ?
                      `${((sleepData.coefficient + bpmData.coefficient) / 2).toFixed(2)}` :
                      '-'}
                  </p>
                )}
              </div>
            </div>

            {/* Carousel */}
            {isLoading ? (
              <div className="h-[60vh] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
              </div>
            ) : (
              <div
                className="relative h-[60vh]"
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
                        className="w-full flex-shrink-0 bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-2xl font-semibold text-gray-900">{insight.title}</h2>
                          <div className="rounded-full bg-slate-200 p-3">
                            {insight.icon}
                          </div>
                        </div>
                        <div className="text-5xl font-bold text-gray-900 mb-4">{insight.value}</div>
                        <div className="flex items-center text-lg text-gray-500 mb-4">
                          <span className={insight.change && insight.change.startsWith('+') ? 'text-green-500' : 'text-gray-500'}>
                            {insight.change || 'No data'}
                          </span>
                          <span className="ml-2">{insight.period}</span>
                        </div>
                        {insight.data && <PlotGraph data={insight.data} />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

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

            {/* Health & Finance Insights */}
            <div className="mt-12 bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Understanding Your Health & Finances</h2>
              <div className="space-y-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-medium text-emerald-800 mb-2">Sleep Quality & Spending Habits</h3>
                  <p className="text-gray-700">
                    Research shows that poor sleep can lead to impulsive spending decisions. When youre well-rested,
                    youre more likely to make thoughtful financial choices. Our data suggests that better sleep quality
                    correlates with more mindful spending patterns.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-medium text-blue-800 mb-2">Heart Rate & Financial Stress</h3>
                  <p className="text-gray-700">
                    Elevated heart rate can be an indicator of stress, which often leads to emotional spending.
                    By monitoring your heart rate patterns, you can identify stress triggers and develop healthier
                    coping mechanisms that dont involve unnecessary spending.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-medium text-purple-800 mb-2">Mindfulness & Financial Well-being</h3>
                  <p className="text-gray-700">
                    Regular mindfulness practice has been linked to better financial decision-making. When youre
                    present and aware, youre less likely to make impulsive purchases and more likely to stick to
                    your financial goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 