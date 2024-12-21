import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import Sidebar from './components/app/Sidebar'

function App() {
  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar />
      <SidebarInset className='p-4'></SidebarInset>
    </SidebarProvider>
  )
}

export default App
