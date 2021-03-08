
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import {RootStackParamList} from "../containers/NavigationContainer"


export type DemosScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Demos'>;
  route: RouteProp<RootStackParamList, 'Demos'>;
};

export const DemosScreen: React.FC<DemosScreenProps> = ({ navigation, route }   ) =>  {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{route.params.demo}</Text>
    <Text>Demos:</Text>
    <Button
      title="Go to Home"
      onPress={() => {
        navigation.navigate('Home')
        //navigation.navigate('Demos', {});
      }} />
  </View>
  );
}

export default DemosScreen;