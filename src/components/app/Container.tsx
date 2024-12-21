import React from 'react'
import { cn } from '@/lib/utils'

type ContainerProps = {
  className?: string
  children: React.ReactNode
}

function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn('px-1', className)}>
      <div className='container mx-auto'>{children}</div>
    </div>
  )
}

export default Container
