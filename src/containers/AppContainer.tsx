
import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigation from './NavigationContainer';
import RQueryContainer from './RQueryContainer';
import {getConfig} from "../utils/config";



type AppProps = {
  theme?: any
}

const AppContainer: React.FC<AppProps> = ({theme}) => {
  const config = getConfig();
  
  return (
    <RQueryContainer debug={config.debug}>
      <PaperProvider theme={theme}>
        <AppNavigation />
      </PaperProvider>
    </RQueryContainer>
    
  );
}

export default AppContainer;