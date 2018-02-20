import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadState, saveState } from './reducers/localStorage';
import throttle from 'lodash/throttle'

// import Routes from './routes';
import App from './components/App';

import AppReducer from './reducers';

const presistedState = loadState();
const store = createStore(
    AppReducer,
    presistedState
);

store.subscribe(throttle(() => {
    saveState({
        comments: store.getState().comments
    });
}, 1000));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);