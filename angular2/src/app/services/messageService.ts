
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'

import { Message } from '../models/message'
import { client } from './client'

@Injectable()
export class MessageService {
  getAll() {
    return (client.request<Message[]>({
      url: '/api/message/',
      method: 'GET'
    }).map(messages => {
      messages.forEach(msg => {
        msg.time = new Date(msg.time)
      })
      return messages
    }) as any) as Observable<Message[]>
  }

  post(message: Message) {
    return (client.request<Message>({
      url: '/api/message/',
      method: 'POST',
      body: message
    }).map(msg => {
      msg.time = new Date(msg.time)
      return msg
    }) as any) as Observable<Message>
  }
}
