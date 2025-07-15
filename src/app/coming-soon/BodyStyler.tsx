'use client'

import { useEffect } from 'react'

export default function BodyStyler() {
  useEffect(() => {
    // Remove the dark class and ensure bg-black is applied
    document.body.className = 'bg-black text-white min-h-screen'
    
    // Cleanup function to restore original classes when component unmounts
    return () => {
      document.body.className = 'dark bg-black text-white min-h-screen'
    }
  }, [])

  return null
} 