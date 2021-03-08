
import React, { Component } from 'react';
import { DefaultTheme } from 'react-native-paper';
import AppContainer from './containers/AppContainer';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};


export default function App() {
  return (
    <AppContainer theme={theme}/>
  );
}

