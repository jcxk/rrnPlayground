
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { RootStackParamList } from 'containers/NavigationContainer';


export type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }   ) =>  {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Button  mode="contained"  onPress={() => { navigation.navigate('Demos', {})   }} >Demos</Button>
      
    </View>
  );
}

export default HomeScreen;