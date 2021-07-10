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














// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   Animatable,
// } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar backgroundColor='#34A853' barStyle="light-content" />
//         <View style={styles.header}>
//           <Text style={styles.text_header}>Login Screen </Text>
//         </View>
//         <View
//           style={[styles.footer, {
//             backgroundColor: '#fff'
//           }]}>
//           <Text style={[styles.text_footer, {
//             color: '#333'
//           }]}>Username</Text>
//           <View style={styles.action}>
//             <TextInput
//               placeholder="Enter Username"
//               placeholderTextColor="#666666"
//               style={[styles.textInput, {
//                 color: '#333'
//               }]} autoCapitalize="none" />
//           </View>
//           <Text style={[styles.text_footer, {
//             color: '#333',
//             marginTop: 35
//           }]}>Password</Text>
//           <View style={styles.action}>
//             <TextInput
//               placeholder="Enter Password"
//               placeholderTextColor="#666666"
//               secureTextEntry={true}
//               style={[styles.textInput, {
//                 color: '#333'
//               }]} autoCapitalize="none" />
//           </View>
//           <TouchableOpacity>
//             <Text style={{ color: '#34A853', marginTop: 15 }}>Forgot password?</Text>
//           </TouchableOpacity>
//           <View style={styles.button}>
//             <TouchableOpacity style={styles.signIn}>
//               <Text style={[styles.textSign, {
//                 color: '#fff'
//               }]}>Sign In</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.signIn, {
//                 borderColor: '#34A853',
//                 borderWidth: 1,
//               }]}>
//               <Text style={[styles.textSign, {
//                 color: '#34A853'
//               }]}>Sign In</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.signIn, {
//                 borderColor: '#34A853',
//                 borderWidth: 1,
//                 marginTop: 15
//               }]}
//             >
//               <Text style={[styles.textSign, {
//                 color: '#34A853'
//               }]}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#34A853'
//   },
//   header: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     paddingBottom: 50
//   },
//   footer: {
//     flex: 3,
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingHorizontal: 20,
//     paddingVertical: 30
//   },
//   text_header: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 30
//   },
//   text_footer: {
//     color: '#05375a',
//     fontSize: 18,
//     marginLeft: 5,
//     fontWeight: 'bold',
//   },
//   action: {
//     flexDirection: 'row',
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f2f2f2',
//     paddingBottom: 5
//   },
//   textInput: {
//     flex: 1,
//     marginTop: Platform.OS === 'ios' ? 0 : -12,
//     paddingLeft: 10,
//     color: '#05375a',
//     borderWidth: 1,
//     borderRadius: 10,
//     marginTop: 0,
//   },
//   button: {
//     alignItems: 'center',
//     margin: 'auto'
//   },
//   signIn: {
//     width: '100%',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   textSign: {
//     fontSize: 18,
//     fontWeight: 'bold'
//   }
// });
