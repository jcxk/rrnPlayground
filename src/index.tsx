
import React, { Component } from 'react';
import { DefaultTheme } from 'react-native-paper';
import AppContainer from './containers/AppContainer';

const theme = {
  ...DefaultTheme,
  //roundness: 4,
  /*
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: '#f1c40f',
  }
  */
};


export default function App() {
  return (
    <AppContainer theme={theme}/>
  );
}

