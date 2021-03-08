
import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigation from './NavigationContainer';

type AppProps = {
  theme?: any
}

const AppContainer: React.FC<AppProps> = ({theme}) => {
  return (
    <PaperProvider theme={theme}>
      <AppNavigation />
    </PaperProvider>
  );
}

export default AppContainer;