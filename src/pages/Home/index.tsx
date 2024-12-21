import { Card } from '@/components/ui/card'
import Section from '@/components/app/Section'
import Stats from './components/Stats'
import Charts from './components/Charts'
import Table from './components/Table'

function HomePage() {
  return (
    <Card className='my-9'>
      <Section title='At a glance'>
        <Stats />
      </Section>

      <Section title='Insights'>
        <Charts />
      </Section>

      <Section title='Orders'>
        <Table />
      </Section>
    </Card>
  )
}

export default HomePage
