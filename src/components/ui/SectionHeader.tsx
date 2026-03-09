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
        <span className="text-primary text-[15px] tracking-[0.15em] uppercase font-medium mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-2xl md:text-[28px] font-bold text-text-main leading-tight">
        {title}
      </h2>
    </div>
  )
}
