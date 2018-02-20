import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadState, saveState } from './reducers/localStorage';
import throttle from 'lodash/throttle'

import Routes from './routes';

import AppReducer from './reducers';

const presistedState = loadState();
const store = createStore(
    A
    presistedState
);

store.subscribe(throttle(() => {
    saveState({
        comments: store.getState().comments
    });
}, 1000));

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);