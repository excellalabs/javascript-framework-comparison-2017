
import React, { Component } from 'react';

export class Messages extends Component {
  render() {
    let { messages } = this.props;
    return (
      <div>
        Messages
        <ul>
          {
            messages.map((message) => (
              <li>
                  {message.time.toLocaleString()} -- {message.text}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
