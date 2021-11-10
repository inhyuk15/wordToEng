import React from 'react';
import type {Node} from 'react';
import Container from './src/Container';
import {View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './src/components/reducer';

const store = createStore(rootReducer);

const App = () =>{
  return(
    <Provider store = {store}>
      <Container />
    </Provider>
  );
}

export default App;
