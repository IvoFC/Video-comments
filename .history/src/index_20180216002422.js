import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './routes';

import AppReducer from './reducers'

const store = createStore(AppReducer)
console.log(store.getState());

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);