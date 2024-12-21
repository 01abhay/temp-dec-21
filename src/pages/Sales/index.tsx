import { Card } from '@/components/ui/card'
import Section from '@/components/app/Section'
import Table from '../Home/components/Table'

function SalesPage() {
  return (
    <Card className='my-9'>
      <Section title='Orders'>
        <Table />
      </Section>
    </Card>
  )
}

export default SalesPage
