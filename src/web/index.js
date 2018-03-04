import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import FieldSet from './FieldSet';
import createStore from '../common/createStore';
import loadJsonToStore from '../common/loadJsonToStore';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <FieldSet />
  </Provider>,
  document.getElementById('root'),
);

loadJsonToStore(store);
