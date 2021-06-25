import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './config/Navigation';

import store from './config/store';

export default () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);
