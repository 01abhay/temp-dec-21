import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <div className='px-1'>
      <div className='container mx-auto'>{children}</div>
    </div>
  )
}

export default Container
