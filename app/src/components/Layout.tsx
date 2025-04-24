'use client'

import { ReactNode } from 'react'
import BottomNavigation from './BottomNavigation'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100 text-black flex flex-col">
      <div className="flex-1">
        {children}
      </div>
      <BottomNavigation />
    </div>
  )
} 