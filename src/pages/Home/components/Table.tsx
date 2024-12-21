import { useState } from 'react'
import { Link } from 'react-router'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ArrowUpDown, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Section from '@/components/app/Section'
import { Table as ShadcnTable, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { type Product, products } from '../data'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination: { pageSize: 5, pageIndex: 0 },
      sorting,
      columnVisibility,
      columnFilters,
    },
    enableRowSelection: true,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <div className='overflow-hidden whitespace-nowrap text-nowrap rounded-xl border'>
      <ShadcnTable>
        <TableHeader className='h-11 bg-muted'>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter className='h-10 bg-muted'>
          <TableRow>
            <TableCell colSpan={999}>
              <div className='flex items-center gap-3'>
                <span className='text-sm text-muted-foreground'>
                  {table.getState().pagination.pageIndex + 1} of {table.getPageCount()} pages
                </span>

                <div className='flex-1' />
                <Button variant='outline' size='sm' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                  Previous
                </Button>

                <Button variant='outline' size='sm' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                  Next
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </ShadcnTable>
    </div>
  )
}

const Table = () => {
  return (
    <Card className='my-9'>
      <Section title='Sales'>
        <DataTable<Product, Product>
          columns={[
            {
              accessorKey: 'id',
              header: 'Product',
              cell: ({ row }) => {
                const info = row.original
                return (
                  <div className='flex items-center gap-3'>
                    <img className='h-10 w-10 min-w-10 rounded-full bg-muted' src={info.image} alt={info.name} />
                    <span className='text-sm'>{info.name}</span>
                  </div>
                )
              },
              enableSorting: false,
              enableHiding: false,
            },
            {
              accessorKey: 'date',
              header: 'Date',
              cell: ({ row }) => (
                <div className='flex flex-col'>
                  <span>{row.getValue('date')}</span>
                  <span className='text-xs text-muted-foreground'>{row.getValue('time')}</span>
                </div>
              ),
            },
            {
              accessorKey: 'time',
              header: 'Time',
              cell: ({ row }) => row.getValue('time'),
            },
            {
              accessorKey: 'orderValue',
              header: 'Order Value',
              cell: ({ row }) => <>${(row.getValue('orderValue') as number).toFixed(2)}</>,
            },
            {
              accessorKey: 'commission',
              header: ({ column }) => {
                return (
                  <>
                    Commission
                    <Button
                      className='ml-1 size-5'
                      variant='ghost'
                      size='icon'
                      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                      <ArrowUpDown className='size-4' />
                    </Button>
                  </>
                )
              },
              cell: ({ row }) => <div className='font-semibold'>${(row.getValue('commission') as number).toFixed(2)}</div>,
            },
            {
              id: 'actions',
              cell: () => (
                <Link to='/chat' className='inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground'>
                  View Chat
                  <ArrowUpRight className='h-4 w-4' />
                </Link>
              ),
            },
          ]}
          data={products}
        />
      </Section>
    </Card>
  )
}

export default Table
