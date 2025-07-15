'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import FloatingNewsletterWrapper from './FloatingNewsletterWrapper'

interface NavigationWrapperProps {
  children: ReactNode
}

export default function NavigationWrapper({ children }: NavigationWrapperProps) {
  const pathname = usePathname()
  const isComingSoon = pathname === '/coming-soon'

  if (isComingSoon) {
    // For coming-soon page, only render the children (the page content)
    // without header, footer, or floating newsletter
    return <>{children}</>
  }

  // For all other pages, render everything normally
  return (
    <>
      <Header />
      {children}
      <FloatingNewsletterWrapper />
      <Footer />
    </>
  )
} 