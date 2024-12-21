import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Section from '@/components/app/Section'

const messages = [
  {
    id: 1,
    sender: 'bot',
    message: 'Hi, how can I help you today?',
  },
  {
    id: 2,
    sender: 'user',
    message: "Hey, I'm having trouble with my account.",
  },
  {
    id: 3,
    sender: 'bot',
    message: 'What seems to be the problem?',
  },
  {
    id: 4,
    sender: 'user',
    message: "I can't log in.",
  },
]

const formSchema = z.object({
  message: z.string().min(1).max(255),
})

function ChatPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: { message: '' },
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Card className='mx-auto my-9 max-w-[600px]'>
      <Section title='Chat'>
        <div className='min-h-[60vh] p-6'>
          <div className='space-y-4'>
            {messages.map(message => (
              <div
                key={message.id}
                className={cn(
                  `flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm`,
                  message.sender === 'bot' ? 'bg-accent text-accent-foreground' : 'ml-auto bg-primary text-primary-foreground',
                )}>
                {message.message}
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center p-6 pt-0'>
          <form className='flex w-full items-center space-x-2' onSubmit={form.handleSubmit(onSubmit)}>
            <Input {...form.register('message')} placeholder='Type your message...' autoComplete='off' />
            <Button size='icon' type='submit' disabled={form.formState.isSubmitting || !form.formState.isValid}>
              <Send />
            </Button>
          </form>
        </div>
      </Section>
    </Card>
  )
}

export default ChatPage
