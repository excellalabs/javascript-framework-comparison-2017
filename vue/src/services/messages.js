
import { client } from './client'

export const MessageService = {
  getAll () {
    return client.request({
      url: '/api/message/',
      method: 'GET'
    }).map(messages => {
      messages.forEach(msg => {
        msg.time = new Date(msg.time)
      })
      return messages
    })
  },
  post (message) {
    return client.request({
      url: '/api/message/',
      method: 'POST',
      body: message
    }).map(msg => {
      msg.time = new Date(msg.time)
      return msg
    })
  }
}
