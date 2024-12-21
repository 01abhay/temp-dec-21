type SectionProps = {
  title?: string
  children?: React.ReactNode
}

function Section({ title, children }: SectionProps) {
  return (
    <div className='rounded-2xl border p-6'>
      {title && <h2 className='mb-9 mt-2 text-3xl'>{title}</h2>}

      {children}
    </div>
  )
}

export default Section
