import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 101, name: 'LED', price: 9 },
        { id: 102, name: 'Mobile', price: 3 },
        { id: 103, name: 'Bike', price: 20 },
        { id: 104, name: 'Charger', price: 2 },
        { id: 105, name: 'Laptop', price: 50 },
      ]
    };
    this.delData = this.state.data.filter(product => {
      if (product.id == this.state.delete) {
        return false;
      }
      return true;
    });
    this.Initialize = {
      data: [
        { id: 101, name: 'LED', price: 9 },
        { id: 102, name: 'Mobile', price: 3 },
        { id: 103, name: 'Bike', price: 20 },
        { id: 104, name: 'Charger', price: 2 },
        { id: 105, name: 'Laptop', price: 50 },
      ],
    };
  }

  render() {
    const listBelow5 = this.state.data.filter(product => {
      if (product.price < 5) {
        return true;
      }
      return false;
    });
    const updateList = this.state.data.map(product => {
      let clone;
      clone = JSON.parse(JSON.stringify(product));
      clone.price = clone.price + clone.price / 10;
      return clone;
    });
    let deleteData = prodId => {
      var delFinalList = this.state.data.filter(product => {
        if (product.id == prodId) {
          return false;
        }
        return true;
      });
      return delFinalList;
    };

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Products</Text>
        <FlatList
          data={this.state.data}
          delets={this.state.delete}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>Id: {item.id}</Text>
              <Text style={styles.title}>Name: {item.name}</Text>
              <Text style={styles.title}>Price: {item.price}</Text>
              <View
                style={{
                  position: 'absolute',
                  top: 30,
                  right: 20,
                }}>
                <TouchableOpacity
                  style={{
                    width: 70,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: 'gray',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({ data: deleteData(item.id) });
                  }}>
                  <Text>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.setState({ data: listBelow5 });
          }}>
          <Text>Show Products Below 5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => {
            this.setState({ data: updateList });
          }}>
          <Text>Increase Price By 10%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn3}
          onPress={() => {
            this.setState({ data: this.Initialize.data });
          }}>
          <Text>Show All Products</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
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
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'lightgrey',
    width: 170,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '5%',
    bottom: 70,
    borderRadius: 20,
  },
  btn2: {
    backgroundColor: 'lightgrey',
    width: 170,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '50%',
    bottom: 70,
    borderRadius: 20,
  },
  btn3: {
    backgroundColor: 'lightgrey',
    width: 160,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '5%',
    bottom: 20,
    borderRadius: 20,
  },
  delete_btn: {
    width: 10,
  },
});
