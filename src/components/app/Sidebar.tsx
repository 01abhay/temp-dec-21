import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Home, MessageCircle, Settings, Users } from 'lucide-react'

import logo from '@/assets/logo.svg'

const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Chat',
    url: '#',
    icon: MessageCircle,
  },
  {
    title: 'Users',
    url: '#',
    icon: Users,
  },

  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
]

function Sidebar() {
  return (
    <ShadcnSidebar collapsible='icon'>
      <SidebarHeader>
        <a href='#'>
          <img className='h-8 w-8' src={logo} alt='logo' />
        </a>
      </SidebarHeader>
      <SidebarContent className='pt-10'>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className='gap-4'>
              {items.slice(0, -1).map((item, i) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={i === 0}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {items.slice(-1).map(item => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </ShadcnSidebar>
  )
}

export default Sidebar
