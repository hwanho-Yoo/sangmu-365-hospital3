import { IMAGES } from '@/lib/imagePaths'

interface SubPageHeaderProps {
  title: string
  subtitle?: string
  bgImage?: string
}

const subtitleToImage: Record<string, string> = {
  ABOUT: IMAGES.subpage.about,
  'TRAFFIC ACCIDENT': IMAGES.subpage.traffic,
  TREATMENT: IMAGES.subpage.treatment,
}

export default function SubPageHeader({ title, subtitle, bgImage }: SubPageHeaderProps) {
  const image = bgImage || (subtitle && subtitleToImage[subtitle]) || IMAGES.subpage.default

  return (
    <div
      className="relative w-full flex items-center justify-center h-[200px] md:h-[320px]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative text-center px-4">
        {subtitle && (
          <p className="text-white/60 text-sm tracking-widest uppercase mb-3">
            {subtitle}
          </p>
        )}
        <h1 className="text-white text-[26px] md:text-[34px] font-bold">{title}</h1>
      </div>
    </div>
  )
}
