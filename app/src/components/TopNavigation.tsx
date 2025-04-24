'use client'

import { useRouter } from 'next/navigation'

interface TopNavigationProps {
  onMenuClick?: () => void
  showBackButton?: boolean
}

export default function TopNavigation({ onMenuClick, showBackButton = false }: TopNavigationProps) {
  const router = useRouter()

  const handleClick = () => {
    if (onMenuClick) {
      onMenuClick()
    } else if (!showBackButton) {
      router.push('/settings')
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 h-12 bg-white border-b border-gray-200 z-50">
      <div className="h-full flex items-center justify-between px-4">
        <div className="w-8"></div> {/* Spacer for balance */}
        <div className="flex items-center justify-center">
          <img src="/logo.jpg" alt="Logo" className="h-8 w-auto" />
        </div>
        <button
          onClick={handleClick}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors font-lloyds"
        >
          {showBackButton ? (
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          ) : (
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
} 