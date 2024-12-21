import { Card } from '@/components/ui/card'
import Section from '@/components/app/Section'
import Stats from './components/Stats'
import Charts from './components/Charts'

function HomePage() {
  return (
    <Card className='my-9'>
      <Section title='At a glance'>
        <Stats />
      </Section>

      <Section title='Insights'>
        <Charts />
      </Section>
    </Card>
  )
}

export default HomePage
