
import { Component, OnInit, NgZone } from '@angular/core'
import { Observable } from 'rxjs'

import { MessageService } from '../../services/messageService'
import { Message } from '../../models/message'

@Component({
  selector: 'messages',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class MessagesComponent implements OnInit {
  private messages: Observable<Message[]>

  constructor(private _messages: MessageService, private _ngZone: NgZone) {}

  ngOnInit() {
    this.messages = this._messages.getAll()
  }
}
