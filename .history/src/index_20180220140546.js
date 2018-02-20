import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadState, saveState } from './reducers/localStorage';
import throttle from 'lodash/throttle'
import './index.css';

import Routes from './routes';

import AppReducer from './reducers';

const presistedState = loadState();
const store = createStore(
    AppReducer,
    presistedState
);

store.subscribe(throttle(() => {
    saveState({
        comments: store.getState().comments[0]
    });
}, 1000));

render(
    <Provider store={store}>
        <Routes history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);