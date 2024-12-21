import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <div className='px-1'>
      <div className='container mx-auto rounded-2xl border p-6'>{children}</div>
    </div>
  )
}

export default Container
