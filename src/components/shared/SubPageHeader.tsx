interface SubPageHeaderProps {
  title: string
  subtitle?: string
}

export default function SubPageHeader({ title, subtitle }: SubPageHeaderProps) {
  return (
    <div
      className="relative w-full flex items-center justify-center"
      style={{
        height: 'clamp(140px, 20vw, 180px)',
        background: 'linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%)',
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative text-center px-4">
        <nav className="text-white/50 text-xs mb-2">
          <span>홈</span>
          <span className="mx-1.5">/</span>
          <span className="text-white/80">{title}</span>
        </nav>
        <h1 className="text-white text-2xl md:text-3xl font-bold">{title}</h1>
        {subtitle && (
          <p className="text-white/70 text-sm mt-2">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
