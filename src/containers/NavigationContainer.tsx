import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp  } from '@react-navigation/stack';
import { HomeScreen, DemosScreen} from "../screens"

export type RootStackParamList = {
  Home: undefined;
  Demos: { demo?: string};
};
const RootStack = createStackNavigator<RootStackParamList>();

const AppNavigation: React.FC = ({children}) =>  (
    <NavigationContainer>
      <RootStack.Navigator>
          <RootStack.Screen name="Home" component={HomeScreen}  options={{ title: 'Overview' }} />
          <RootStack.Screen name="Demos" component={DemosScreen}  options={{ title: 'Demos' }} />
      </RootStack.Navigator>
    </NavigationContainer>
    )

export default AppNavigation;
