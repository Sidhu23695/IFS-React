import React from 'react';
import ReactDOM from 'react-dom';
import { IfsContextProvider, initialState } from './context/index';

import './index.css';
import App from './App';

ReactDOM.render(<IfsContextProvider state={initialState}><App /></IfsContextProvider>, document.getElementById('root')
);
