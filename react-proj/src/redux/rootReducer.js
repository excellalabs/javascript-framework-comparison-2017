
import { combineReducers } from 'redux'

import { messagesReducer } from './reducers/messages'

export const reducer = combineReducers({
  messages: messagesReducer
})