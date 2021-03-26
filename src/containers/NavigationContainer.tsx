import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp  } from '@react-navigation/stack';
import  { HomeScreen, DemosScreen, DetailScreen} from "@screens/index"
import {Post} from "@hooks/usePosts";

export type RootStackParamList = {
  Home: undefined;
  Demos: { demo?: string};
  Detail: { item: Post }
};
const RootStack = createStackNavigator<RootStackParamList>();

const AppNavigation: React.FC = ({children}) =>  (
    <NavigationContainer>
      <RootStack.Navigator>
          <RootStack.Screen name="Home" component={HomeScreen}  options={{ title: 'Home' }} />
          <RootStack.Screen name="Demos" component={DemosScreen}  options={{ title: 'Demos' }} />
          <RootStack.Screen name="Detail" component={DetailScreen}   />
      </RootStack.Navigator>
    </NavigationContainer>
    )

export default AppNavigation;
