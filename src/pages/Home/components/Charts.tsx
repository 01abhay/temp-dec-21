import { Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ComposedChart, ResponsiveContainer, BarChart } from 'recharts'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartNoAxesColumn, MessageCircle, TrendingUp } from 'lucide-react'

import pulseBg from '@/assets/images/pulse-bg.svg'

function Charts() {
  return (
    <div className='grid grid-cols-12 gap-6'>
      <div className='col-span-12 overflow-hidden xl:col-span-6'>
        <ConsultationsChart />
      </div>
      <div className='col-span-12 md:col-span-6 xl:col-span-3'>
        <CompareVsPastChart />
      </div>
      <div className='col-span-12 md:col-span-6 xl:col-span-3'>
        <Forecasts />
      </div>
    </div>
  )
}

export default Charts

// utils
const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

// consultations chart
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const weekData = Array.from({ length: 7 }, (_, i) => {
  return { day: days[i], incoming: getRandomInt(10, 80), answered: getRandomInt(10, 80), expertsOnline: getRandomInt(10, 80) }
})

function ConsultationsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-1 text-xs font-semibold text-muted-foreground'>
          <MessageCircle className='size-3' strokeWidth={4} /> CONSULTATIONS
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={340}>
          <ComposedChart data={weekData}>
            <CartesianGrid strokeDasharray='3 3' vertical={false} />
            <XAxis dataKey='day' axisLine={false} tickLine={false} />
            <YAxis label={{ value: 'Incoming', angle: -90, position: 'insideLeft' }} yAxisId='left' axisLine={false} tickLine={false} />
            <YAxis
              label={{ value: 'Confirmed', angle: 90, position: 'insideRight' }}
              yAxisId='right'
              orientation='right'
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Bar
              yAxisId='right'
              dataKey='expertsOnline'
              name='Experts Online'
              fill='hsl(var(--chart-1))'
              maxBarSize={32}
              radius={[6, 6, 0, 0]}
            />
            <Line
              yAxisId='left'
              type='monotone'
              dataKey='incoming'
              name='Incoming'
              stroke='hsl(var(--sidebar-background))'
              dot={false}
              strokeDasharray='5 5'
            />
            <Line yAxisId='left' type='monotone' dataKey='answered' name='Answered' stroke='#82ca9d' dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter>
        {[
          { title: 'Incoming', color: 'hsl(var(--sidebar-background))' },
          { title: 'Answered', color: '#82ca9d' },
          { title: 'Experts online', color: 'hsl(var(--chart-1))' },
        ].map(item => (
          <div key={item.title} className='mr-4 flex items-center gap-2 text-xs text-muted-foreground'>
            <div className='h-1 w-4 rounded-sm' style={{ backgroundColor: item.color }}></div>
            <span className='text-nowrap text-sm text-gray-600'>{item.title}</span>
          </div>
        ))}
      </CardFooter>
    </Card>
  )
}

// compare vs past chart
const comparisonData = [
  { period: 'This week', consultations: getRandomInt(10, 80), ordersClosed: getRandomInt(10, 80) },
  { period: 'Last week', consultations: getRandomInt(10, 80), ordersClosed: getRandomInt(10, 80) },
]

function CompareVsPastChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-1 text-xs font-semibold text-muted-foreground'>
          <ChartNoAxesColumn className='size-3' strokeWidth={4} /> VS PAST PERIOD
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={340}>
          <BarChart data={comparisonData} margin={{ top: 0, right: 0, bottom: 0, left: -32 }}>
            <CartesianGrid strokeDasharray='3 3' vertical={false} />
            <XAxis dataKey='period' axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip cursor={{ fill: '#00000000' }} />
            <Bar dataKey='consultations' fill='hsl(var(--accent))' name='Consultations' maxBarSize={32} radius={[6, 6, 0, 0]} />
            <Bar dataKey='ordersClosed' fill='hsl(var(--sidebar-background))' name='Orders closed' maxBarSize={32} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter>
        {[
          { title: 'Consultations', color: 'hsl(var(--accent))' },
          { title: 'Orders closed', color: 'hsl(var(--sidebar-background))' },
        ].map(item => (
          <div key={item.title} className='mr-4 flex items-center gap-2 text-xs text-muted-foreground'>
            <div className='h-1 w-4 rounded-sm' style={{ backgroundColor: item.color }}></div>
            <span className='text-nowrap text-sm text-gray-600'>{item.title}</span>
          </div>
        ))}
      </CardFooter>
    </Card>
  )
}

// forecasts
function Forecasts() {
  return (
    <Card
      className='dark h-full border-none'
      style={{ backgroundImage: `url(${pulseBg}), linear-gradient(180deg, #15B79F 0%, #0E9382 100%)`, backgroundSize: 'cover' }}>
      <CardHeader>
        <CardTitle className='flex items-center gap-1 text-xs font-semibold'>
          <ChartNoAxesColumn className='size-3' strokeWidth={4} /> Forecasts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col gap-4'>
          {[
            { title: 'Sales', increase: 15, description: 'forecasted increase in your sales closed by the end of the current month' },
            { title: 'Consultations', increase: 15, description: 'forecasted increase in consultations by the end of the current month' },
          ].map(item => (
            <div key={item.title} className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <span className='text-[56px] font-medium'>+{item.increase}%</span>
                <TrendingUp className='size-9' />
              </div>
              <p className='text-sm font-normal leading-6'>{item.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
