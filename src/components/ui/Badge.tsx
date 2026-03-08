import clsx from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'muted'
  className?: string
}

const variants = {
  primary: 'bg-primary-light text-primary',
  outline: 'border border-primary text-primary',
  muted: 'bg-bg-section text-text-muted',
}

export default function Badge({ children, variant = 'primary', className }: BadgeProps) {
  return (
    <span className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', variants[variant], className)}>
      {children}
    </span>
  )
}
