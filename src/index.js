import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');

const Root = () => <BrowserRouter>{Routes}</BrowserRouter>;

ReactDOM.render(<Root />, rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
