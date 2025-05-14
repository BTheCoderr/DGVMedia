'use client';

import dynamic from 'next/dynamic';

const FloatingNewsletter = dynamic(() => import('./FloatingNewsletter'), {
  ssr: false,
});

export default function FloatingNewsletterWrapper() {
  return <FloatingNewsletter />;
} 