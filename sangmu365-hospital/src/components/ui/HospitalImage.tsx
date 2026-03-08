'use client'

import PlaceholderImage from './PlaceholderImage'

interface HospitalImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
}

function getIconFromAlt(alt: string): string {
  const lower = alt.toLowerCase()
  if (lower.includes('의료진') || lower.includes('원장') || lower.includes('doctor')) return 'User'
  if (lower.includes('장비') || lower.includes('equipment') || lower.includes('microscope')) return 'Microscope'
  return 'Camera'
}

export default function HospitalImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
}: HospitalImageProps) {
  // For now, all images are placeholders since no real photos exist yet.
  // When real images are added to /public/images/, swap this to use next/image.
  const iconName = getIconFromAlt(alt)

  if (fill) {
    return (
      <PlaceholderImage
        label={alt}
        iconName={iconName}
        className={className || 'absolute inset-0'}
      />
    )
  }

  return (
    <PlaceholderImage
      width={width}
      height={height}
      label={alt}
      iconName={iconName}
      className={className}
    />
  )
}
