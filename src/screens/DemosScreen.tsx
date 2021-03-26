
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { List,Button } from 'react-native-paper';
import {RootStackParamList} from "@containers/NavigationContainer";
import demosList from '@components/index'
import _ from "lodash";

export type DemosScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Demos'>;
  route?: RouteProp<RootStackParamList, 'Demos'>;
};


const ShowDemoList:  React.FC<DemosScreenProps> = ({ navigation }) => {
    return Object.keys(demosList).map(
      (value) => (
        <List.Item key={value} title="" left={
            () =>  <Button key={value} mode="contained"  onPress={
                () => { navigation.navigate('Demos', {demo: value})   }} >{_.startCase(value)}</Button>}
        />

        )
  )
}
export const DemosScreen: React.FC<DemosScreenProps> = ({ navigation, route:{ params: { demo} }}   ) =>  {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {
        demosList[demo] !== undefined ?
           React.createElement(demosList[demo]) : <ShowDemoList navigation={navigation}></ShowDemoList>
    }
    
   
  </View>
  );
}

export default DemosScreen;