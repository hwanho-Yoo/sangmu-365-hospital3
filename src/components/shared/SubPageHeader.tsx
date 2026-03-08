interface SubPageHeaderProps {
  title: string
  subtitle?: string
}

export default function SubPageHeader({ title, subtitle }: SubPageHeaderProps) {
  return (
    <div
      className="relative w-full flex items-center justify-center h-[160px] md:h-[200px]"
      style={{
        background: 'linear-gradient(135deg, #3a3028 0%, #4a3f35 50%, #2d2520 100%)',
      }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative text-center px-4">
        {subtitle && (
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">
            {subtitle}
          </p>
        )}
        <h1 className="text-white text-[22px] md:text-[28px] font-bold">{title}</h1>
      </div>
    </div>
  )
}
