
import { MessageService } from './services/messages'
import { replaceMessages } from './redux/actions/replaceMessages'

export function bootstrap (store) {
  MessageService.getAll().subscribe((messages) => {
    store.dispatch(replaceMessages({ messages }))
  })
}