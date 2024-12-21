import { Link, useLocation } from 'react-router'
import { Home, MessageCircle, Settings, Users } from 'lucide-react'

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
import { Separator } from '@/components/ui/separator'
import logo from '@/assets/logo.svg'

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Chat',
    url: '/chat',
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
  const location = useLocation()

  return (
    <ShadcnSidebar collapsible='icon'>
      <SidebarHeader>
        <a href='#'>
          <img className='h-8 w-8' src={logo} alt='logo' />
        </a>
      </SidebarHeader>
      <Separator className='mx-auto my-5 w-[60%] bg-chart-3' />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className='gap-4'>
              {items.slice(0, -1).map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
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
