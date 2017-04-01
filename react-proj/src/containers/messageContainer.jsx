
import React, { Component } from 'react';
import { connect } from 'react-redux'

import { MessageForm } from '../components/messageForm'
import { Messages } from '../components/messages'
import { replaceMessages } from '../redux/actions/replaceMessages'

import { MessageService } from '../services/messages'

class MessagesContainerBase extends Component {
  _postMessage = (message) => {
    MessageService.post(message).subscribe()
  }

  render() {
    const { reduxMessages } = this.props
    return (
      <div>
        <Messages messages={reduxMessages} />
        <MessageForm postMessage={this._postMessage} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reduxMessages: state.messages
  }
}

export const MessagesContainer = connect(mapStateToProps)(MessagesContainerBase)
