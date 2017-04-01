
export const type = 'REPLACE_MESSAGES'

export function replaceMessages(props) {
  return {
    type,
    messages: props.messages
  }
}