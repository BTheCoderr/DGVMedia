import type { Metadata } from 'next'
import BodyStyler from './BodyStyler'

export const metadata: Metadata = {
  title: 'Da GrapeVine - Coming Soon',
  description: 'Something big is coming from Da GrapeVine. Get notified when we launch.',
}

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BodyStyler />
      {children}
    </>
  )
} 