import clsx from 'clsx'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'white' | 'kakao'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  outline: 'border border-primary text-primary hover:bg-primary-light',
  white: 'bg-white text-text-main hover:bg-gray-50',
  kakao: 'bg-kakao text-[#3C1E1E] hover:brightness-95',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    if (external || href.startsWith('http') || href.startsWith('tel:')) {
      return (
        <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
