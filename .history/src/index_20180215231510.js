import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Routes from './routes';

import './index.css';

render(<Routes history={browserHistory} />,
    document.getElementById('root')
);