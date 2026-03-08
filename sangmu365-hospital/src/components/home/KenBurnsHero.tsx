'use client'

import dynamic from 'next/dynamic'

const KenBurnsSlideshow = dynamic(() => import('./KenBurnsSlideshow'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 w-full h-full">
      <div
        className="absolute inset-0 noise-overlay"
        style={{
          background:
            'linear-gradient(135deg, #3a3028 0%, #5a4a3a 30%, #4a3f35 60%, #2d2520 100%)',
        }}
      />
    </div>
  ),
})

export default function KenBurnsHero() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden" style={{ zIndex: 0 }}>
      <KenBurnsSlideshow />
      {/* Dark gradient overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.6) 100%)',
          zIndex: 1,
        }}
      />
    </div>
  )
}
