import { cn } from '@/lib/utils'
import { SidebarTrigger } from '@/components/ui/sidebar'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { PieChart, TagIcon, MessageCircle } from 'lucide-react'

function Navbar() {
  return (
    <NavigationMenu className='flex-grow-0'>
      <NavigationMenuList>
        <NavigationMenuItem className='md:hidden'>
          <SidebarTrigger />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={cn(navigationMenuTriggerStyle() + ' gap-2 rounded-full')} href='#' active>
            <PieChart size={20} />
            <span>Summary</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={cn(navigationMenuTriggerStyle() + ' gap-2 rounded-full')} href='#'>
            <TagIcon size={20} />
            <span>Sales</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={cn(navigationMenuTriggerStyle() + ' gap-2 rounded-full')} href='#'>
            <MessageCircle size={20} />
            <span>Chat</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar
