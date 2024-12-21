import { ArrowUpRight } from 'lucide-react'
import { Table as ShadcnTable, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Link } from 'react-router'

const products = [
  {
    id: '1',
    name: 'Wireless Mouse',
    image: 'https://picsum.photos/64?random=1',
    date: "12 Oct '2023",
    time: '1h 30m',
    orderValue: 45.99,
    commission: 10.5,
  },
  {
    id: '2',
    name: 'Bluetooth Speaker',
    image: 'https://picsum.photos/64?random=2',
    date: "15 Oct '2023",
    time: '3h 15m',
    orderValue: 89.99,
    commission: 20.0,
  },
  {
    id: '3',
    name: 'Gaming Keyboard',
    image: 'https://picsum.photos/64?random=3',
    date: "18 Oct '2023",
    time: '2h 45m',
    orderValue: 129.99,
    commission: 30.0,
  },
  {
    id: '4',
    name: 'Smart Watch',
    image: 'https://picsum.photos/64?random=4',
    date: "20 Oct '2023",
    time: '4h 10m',
    orderValue: 199.99,
    commission: 50.0,
  },
] as const

function Table() {
  return (
    <div className='overflow-hidden rounded-xl border'>
      <ShadcnTable>
        <TableHeader className='h-11 bg-muted'>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time spent</TableHead>
            <TableHead>Order Value</TableHead>
            <TableHead>Commission</TableHead>
            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map(product => (
            <TableRow key={product.id}>
              <TableCell>
                <div className='flex items-center gap-3'>
                  <img className='h-10 w-10 min-w-10 rounded-full bg-muted' src={product.image} alt={product.name} />
                  <span className='text-sm'>{product.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex flex-col'>
                  <span>{product.date}</span>
                  <span className='text-xs text-muted-foreground'>10:24 AM</span>
                </div>
              </TableCell>
              <TableCell>{product.time}</TableCell>
              <TableCell>${product.orderValue}</TableCell>
              <TableCell className='font-semibold'>${product.commission}</TableCell>
              <TableCell className='text-right'>
                <Link to='/chat' className='inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground'>
                  View Chat
                  <ArrowUpRight className='h-4 w-4' />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className='h-10 bg-muted'>
          <TableRow>
            <TableCell colSpan={999}>
              <Pagination className='justify-end'>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href='#' />
                  </PaginationItem>

                  {[1, 2, 3].map((page, i) => (
                    <PaginationItem key={page}>
                      <PaginationLink href='#' isActive={i === 0}>
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href='#' />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </TableCell>
          </TableRow>
        </TableFooter>
      </ShadcnTable>
    </div>
  )
}

export default Table
