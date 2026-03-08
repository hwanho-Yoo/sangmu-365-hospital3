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
  // If src is provided, render actual image
  if (src) {
    if (fill) {
      return (
        <img
          src={src}
          alt={alt}
          className={className || 'absolute inset-0 w-full h-full object-cover'}
        />
      )
    }

    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover ${className || ''}`}
      />
    )
  }

  // Fallback to placeholder when no src
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
