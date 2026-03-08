import clsx from 'clsx'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  narrow?: boolean
}

export default function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div className={clsx('mx-auto w-full px-4 md:px-6', narrow ? 'max-w-[800px]' : 'max-w-[1080px]', className)}>
      {children}
    </div>
  )
}
