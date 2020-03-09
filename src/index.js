import React from 'react';
import ReactDOM from 'react-dom'; // for DOM web site
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App'; // Convention dictates that Component start with a capital

ReactDOM.render(<App /> ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();