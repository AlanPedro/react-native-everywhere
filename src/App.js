import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import boilerplateApp from './reducers';
import TestComponent from './components/TestComponent'

const store = createStore(boilerplateApp)

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <TestComponent />
      </View>
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
  },
  bordered: {
    borderColor: 'red',
    borderWidth: 1,
  }
});
