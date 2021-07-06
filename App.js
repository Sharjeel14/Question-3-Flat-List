import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, SwipeView } from 'react-native';

let stock = [
  { id: 101, name: "LED", price: 9 },
  { id: 102, name: "Mobile", price: 3 },
  { id: 103, name: "Bike", price: 20 },
  { id: 104, name: "Charger", price: 2 },
  { id: 105, name: "Laptop", price: 50 }
];

const Item = ({ id, name, price }) => (
  <View style={styles.item}>
    <Text style={styles.title}>Id: {id}</Text>
    <Text style={styles.title}>Name: {name}</Text>
    <Text style={styles.title}>Price: {price}</Text>
  </View>
);
const App = () => {
  const renderItem = ({ item }) => (
    <Item id={item.id} name={item.name} price={item.price} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <FlatList
        data={stock}
        renderItem={renderItem}
        // renderItem={({ renderItem }) => {
        //   if (Item.price < 5) {
        //     return renderItem(item.name);
        //   }
        // }}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn_text}>Delete</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#34A853',

  },
  item: {
    backgroundColor: 'lightgrey',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
  },
  heading: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold'
  },
  btn: {
    backgroundColor: 'lightgrey',
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '35%',
    bottom: 70,
    borderRadius: 20,
  }
});

export default App;