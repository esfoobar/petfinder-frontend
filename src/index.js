import React from 'react'
import ReactDOM from "react-dom"

import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import configureStore from './configureStore'

import createHistory from 'history/createBrowserHistory'

const initialState = {}
const history = createHistory()
const store = configureStore(initialState, history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
