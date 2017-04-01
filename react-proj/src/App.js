import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { MessagesContainer } from './containers/messageContainer'

import { reducer } from './redux/rootReducer'

import { bootstrap } from './bootstrap'

const store = createStore(reducer)

class App extends Component {

  componentDidMount() {
    bootstrap(store)
  }

  render() {
    return (
      <Provider store={store}>
        <MessagesContainer />
      </Provider>
    );
  }
}

export default App;
