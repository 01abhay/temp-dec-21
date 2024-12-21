import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'

import Sidebar from './components/app/Sidebar'
import Navbar from './components/app/Navbar'
import Container from './components/app/Container'

function App() {
  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar />
      <SidebarInset>
        <Container>
          <Navbar />
        </Container>

        <Separator />

        <Container title='At a glance'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='h-32 bg-red-200'>01</div>
            <div className='h-32 bg-red-200'>02</div>
            <div className='h-32 bg-red-200'>03</div>
            <div className='h-32 bg-red-200'>04</div>
            <div className='h-32 bg-red-200'>05</div>
            <div className='h-32 bg-red-200'>06</div>
          </div>
        </Container>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
