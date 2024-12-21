import { Outlet } from 'react-router'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'

import Container from '@/components/app/Container'
import Sidebar from '@/components/app/Sidebar'
import Navbar from '@/components/app/Navbar'

function Layout() {
  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar />
      <SidebarInset>
        <Container className='py-6'>
          <Navbar />
        </Container>

        <Separator />

        <Container>
          <Outlet />
        </Container>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout
