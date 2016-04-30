import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../store/configure-store';

import AppComponent from './app';
import PropsContainer from './props/props-container';
import UsersContainer from './users/users-container';
import UserPropsContainer from './user/props-container';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

function appContainer() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Router path="/app" component={AppComponent}>
          <Route path="props" component={PropsContainer} />
          <Route path="users" component={UsersContainer} />
          <Route path="users/:userId" component={UserPropsContainer} />
        </Router>
      </Router>
    </Provider>
  );
}

export default appContainer;