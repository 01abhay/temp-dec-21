import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'

import Container from './components/app/Container'
import Section from './components/app/Section'
import Sidebar from './components/app/Sidebar'
import Navbar from './components/app/Navbar'
import HomePage from './pages/Home'

function App() {
  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar />
      <SidebarInset>
        <Container>
          <Section>
            <Navbar />
          </Section>
        </Container>

        <Separator />

        <Container>
          <HomePage />
        </Container>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
