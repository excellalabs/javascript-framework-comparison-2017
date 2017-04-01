
import React, { Component } from 'react';

export class MessageForm extends Component {
  state = {
    text: ''
  }

  _onSubmit = (ev) => {
    let { postMessage } = this.props;
    postMessage({
      text: this.state.text
    })
    ev.preventDefault()
  }

  _onChange = (ev) => {
    let text = ev.target.value
    this.setState(prev => ({
      ...prev,
      text
    }))
  }

  render() {
    return (
    <form onSubmit={this._onSubmit} >
      <input name="text" value={this.state.text} onChange={this._onChange} />
      <button type="submit">Post</button>
    </form>
    )
  }
}
