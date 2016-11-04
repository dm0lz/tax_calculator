import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/index.js';
import TestComponent from './components/testComponent.js';
import { Router, Route, Link } from 'react-router';
import { hashHistory } from 'react-router';
import App from './components/app.js';
import Tax from './components/tax.js';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/tax" component={Tax} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
