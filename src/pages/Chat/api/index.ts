import { getRandomInt } from '@/lib/utils'

export const sendMessage = async (message: string) => {
  console.log(`message: ${message}`)

  return await new Promise(resolve => setTimeout(resolve, 1240)).then(() => ({
    id: getRandomInt(1, 999999999999999),
    sender: 'bot',
    message: 'I am a bot and I am here to help you. (dummy bot message)',
  }))
}
