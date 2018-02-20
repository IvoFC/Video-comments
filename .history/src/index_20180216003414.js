import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadState, saveState } from './reducers/localStorage';

import Routes from './routes';

import AppReducer from './reducers';

const presistedState = loadState();
const store = createStore(
    presistedState
);

store.subscribe(() => {
    sav
})
console.log(store.getState());

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);