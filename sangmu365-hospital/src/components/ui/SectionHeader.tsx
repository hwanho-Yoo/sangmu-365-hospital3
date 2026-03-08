interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center mb-10' : 'mb-10'}>
      <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-body text-sm md:text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
