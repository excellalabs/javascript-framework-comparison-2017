
import { Component, NgZone } from '@angular/core'
import { Observable } from 'rxjs/rx'

import { MessageService } from '../../services/messageService'
import { Message } from '../../models/message'

@Component({
  selector: 'message-form',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class MessageFormComponent {
  messageText: string

  constructor(private _messages: MessageService, private _ngZone: NgZone) {}

  onSubmit(form: any) {
    this._messages.post({
      text: form.text
    }).forEach(() => {})
  }
}
