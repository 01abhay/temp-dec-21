import React from 'react'
import { NavLink } from 'react-router'
import { cn } from '@/lib/utils'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { PieChart, TagIcon, MessageCircle } from 'lucide-react'

function Navbar() {
  return (
    <NavigationMenu className='flex-grow-0'>
      <NavigationMenuList>
        <NavigationMenuItem className='md:hidden'>
          <SidebarTrigger />
        </NavigationMenuItem>

        {[
          { name: 'Summary', icon: PieChart, path: '/' },
          { name: 'Sales', icon: TagIcon, path: '/sales' },
          { name: 'Chat', icon: MessageCircle, path: '/chat' },
        ].map(({ name, icon, path }) => (
          <NavigationMenuItem key={name}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                cn(
                  navigationMenuTriggerStyle({ className: 'h-12 gap-2 rounded-full' }),
                  isActive ? 'pointer-events-none bg-accent' : 'text-muted-foreground hover:bg-muted',
                )
              }>
              {React.createElement(icon, { size: 18 })}
              <span>{name}</span>
            </NavLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar
