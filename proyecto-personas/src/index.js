import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const history = createBrowserHistory();
const middleware = [ routerMiddleware(history), thunk];

const store = createStore(
    reducers, 
    applyMiddleware(...middleware)
)


ReactDOM.render(
    <Provider store={store}>
        <App history= { history } />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
