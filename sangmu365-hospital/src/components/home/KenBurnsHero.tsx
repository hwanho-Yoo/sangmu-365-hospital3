'use client'

export default function KenBurnsHero() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/*
        Ken Burns slideshow will be implemented in Step 2.
        For now, using a static dark gradient as placeholder.
        When real hero images are added, this component will cycle through
        IMAGES.hero[] with cross-fade and kenburns animation.
      */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1a2a3a 0%, #0d1b2a 40%, #1b3a4b 70%, #0a1628 100%)',
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  )
}
