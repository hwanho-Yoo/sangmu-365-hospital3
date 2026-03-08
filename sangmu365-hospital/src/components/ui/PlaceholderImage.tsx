'use client'

import { User, Camera, Microscope, ImageIcon } from 'lucide-react'
import clsx from 'clsx'

interface PlaceholderImageProps {
  width?: number
  height?: number
  label?: string
  iconName?: string
  className?: string
}

const iconMap: Record<string, React.ElementType> = {
  User,
  Camera,
  Microscope,
  Image: ImageIcon,
}

export default function PlaceholderImage({
  width,
  height,
  label,
  iconName = 'Image',
  className,
}: PlaceholderImageProps) {
  const Icon = iconMap[iconName] || ImageIcon

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center',
        className
      )}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
        background: 'linear-gradient(135deg, #E5E0D8, #D5CFC5)',
      }}
    >
      <Icon className="w-8 h-8 text-[#B0A89E] mb-2" strokeWidth={1.5} />
      {label && (
        <span className="text-xs text-[#9A928A] font-medium text-center px-2">
          {label}
        </span>
      )}
    </div>
  )
}
