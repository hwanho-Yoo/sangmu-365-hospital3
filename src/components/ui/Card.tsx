import clsx from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6',
}

export default function Card({ children, className, hover = false, padding = 'none' }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white rounded-xl border border-border-light overflow-hidden',
        hover && 'transition-all duration-200 hover:shadow-md hover:-translate-y-0.5',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  )
}
