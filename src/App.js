import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './utilities/store';
import Routing, { Router, Switch } from './utilities/routing/index';
import TestComponent from './components/TestComponent';

const Route = Routing.Route;

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={TestComponent} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
