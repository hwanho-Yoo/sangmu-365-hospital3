import clsx from 'clsx'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={clsx(centered ? 'text-center' : '', 'mb-10')}>
      {subtitle && (
        <span className="text-primary text-xs tracking-[0.15em] uppercase font-medium mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-xl md:text-2xl font-bold text-text-main">
        {title}
      </h2>
    </div>
  )
}
