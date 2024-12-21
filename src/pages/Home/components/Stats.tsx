import React from 'react'
import { type LucideProps, Check, Coins, HandCoins, MessageCircle, PiggyBank, TagIcon, TrendingDown, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  { title: 'CONSULTATIONS', value: 24, increase: 15, isPositive: true, icon: MessageCircle },
  { title: 'ORDERS PLACED', value: 12, increase: 15, isPositive: false, icon: TagIcon },
  { title: 'CONVERSION', value: 50, suffix: '%', increase: 15, isPositive: false, icon: Check },
  { title: 'TOTAL SALES VALUE', prefix: '$', value: 2400, increase: 15, isPositive: true, icon: HandCoins },
  { title: 'AVG ORDER VALUE', prefix: '$', value: 240, increase: 15, isPositive: true, icon: Coins },
  { title: 'COMMISSION PAID', prefix: '$', value: 240, increase: 15, isPositive: true, icon: PiggyBank },
] as const

type StatCardProps = {
  icon: React.ElementType<LucideProps>
  title: string
  increase: number
  prefix?: string
  value: number
  suffix?: string
  isPositive?: boolean
}
function StatCard({ icon: Icon, title, value, increase, prefix = '', suffix = '', isPositive = true }: StatCardProps) {
  return (
    <Card>
      <CardContent className='p-6'>
        <span className='flex items-center gap-1 text-xs font-semibold text-muted-foreground'>
          <Icon className='size-3' strokeWidth={4} /> {title}
        </span>

        <p className='my-2 text-3xl'>{`${prefix}${value}${suffix}`}</p>

        <div className='flex items-center gap-1 text-sm'>
          <div className={`flex items-center gap-1 ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
            {isPositive ? <TrendingUp className='size-6' /> : <TrendingDown className='size-6' />}
            <span>{increase}%</span>
          </div>
          <span className='inline-block text-muted-foreground'>{isPositive ? 'increase' : 'decrease'}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Stats() {
  return (
    <div className='grid grid-cols-2 gap-6 md:grid-cols-3'>
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  )
}
