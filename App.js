import React from 'react';
import type {Node} from 'react';
import Container from './src/Container';
import { Provider } from 'react-redux';
import createStore from 'redux';
import {View, Text} from 'react-native';
// const store = createStore();

const App = () =>{
  return(
  // <Provider store = {store}>
  <Container />
  
  // </Provider>
  );
}

export default App;
