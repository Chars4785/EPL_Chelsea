import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/App';
import { createStore } from 'redux';
import store from './src/ducks';

ReactDOM.render (
    <Provider store={store}>
        <App />
    </Provider>
,document.getElementById("root"));