import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Routes from './routes';

import AppReducer from './reducers'
import App from './components/App'

const store = createStore(AppReducer)
console.log(store.getState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);