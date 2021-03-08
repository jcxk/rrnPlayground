
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParamList } from '../containers/NavigationContainer';


export type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }   ) =>  {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button  title="Go to Demos"  onPress={() => { navigation.navigate('Demos', {})   }} />
      <Button  title="Go to Demo FlatList1"  onPress={() => { navigation.navigate('Demos', {demo: 'flatlist1'})   }} />
    </View>
  );
}

export default HomeScreen;