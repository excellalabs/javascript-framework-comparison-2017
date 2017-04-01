
import { type as replaceMessages} from '../actions/replaceMessages'

const INITIAL_STATE = []

export function messagesReducer (previousState = INITIAL_STATE, action) {
  if(action.type === replaceMessages) {
    return action.messages
  } else {
    return previousState
  }
}