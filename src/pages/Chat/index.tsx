import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircle, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Section from '@/components/app/Section'

import { sendMessage } from './api'

const initialMessages = [{ id: 1, sender: 'bot', message: 'Hi, how can I help you today?' }]

const formSchema = z.object({
  message: z.string().min(1).max(255),
})

function ChatPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: { message: '' },
    resolver: zodResolver(formSchema),
  })
  const { isValid, isSubmitting } = form.formState

  const [messages, setMessages] = useState(initialMessages)
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setMessages(messages => [...messages, { id: messages.length + 1, sender: 'user', message: values.message }])

    await sendMessage(values.message).then(resp => {
      setMessages(messages => [...messages, resp])
    })

    form.reset()
  }

  return (
    <Card className='mx-auto my-9 max-w-[600px]'>
      <Section title='Chat'>
        <div className='overflow-y-auto p-6' style={{ height: 'calc(100vh - 364px)' }}>
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
            <Input {...form.register('message')} placeholder='Type your message...' autoComplete='off' autoFocus disabled={isSubmitting} />
            <Button size='icon' type='submit' disabled={isSubmitting || !isValid}>
              {isSubmitting ? <LoaderCircle className='animate-spin' /> : <Send />}
            </Button>
          </form>
        </div>
      </Section>
    </Card>
  )
}

export default ChatPage
