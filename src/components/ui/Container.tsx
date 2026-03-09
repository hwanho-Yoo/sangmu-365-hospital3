import clsx from 'clsx'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  narrow?: boolean
}

export default function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div className={clsx('mx-auto w-full px-5 md:px-6', narrow ? 'max-w-[860px]' : 'max-w-[1100px]', className)}>
      {children}
    </div>
  )
}
