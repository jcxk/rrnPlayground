import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import faker, { fake } from "faker";


type fakeData = {
    id: string,
    title: string
}

const genData = (maxGen: number): fakeData[] => {
    let DATA: fakeData[] = [];
    for (let i=0; i < maxGen;i++) {
        DATA.push({
            id: faker.random.uuid(),
            title: faker.name.findName()
         });
    }
    
    return DATA;
}
  
  const Item : React.FC = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  

const FlatListJson: React.FC = () => {
    const data = genData(18);
    console.log(data)
    return  (
    <SafeAreaView>
        <FlatList
        data={data}
        renderItem={({ item }) => (<Item title={item.title} />)}
        keyExtractor={item => item.id}
        />
    </SafeAreaView>
  )
}
export default FlatListJson;