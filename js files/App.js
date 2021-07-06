import React, { Component, useState } from 'react';
import { Picker } from '@react-native-picker/picker';

// import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Ionicons,
  Image,
  async,
  Button,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

function CustomHeader({ title, isHome, navigation }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#44923c',
        }}>
        {isHome ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{
                width: 30,
                marginLeft: 10,
                height: 30,
              }}
              source={require('./img/menu2.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 20, height: 20, marginLeft: 5, marginRight: 5 }}
              source={require('./img/arrow.png')}
              resizeMode="contain"
            />
            <Text>Back</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flex: 1, backgroundColor: '#44923c' }}></View>

      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
          backgroundColor: '#44923c',
        }}>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 25, height: 25, marginRight: 10, marginTop: 5 }}
            source={require('./img/menu1.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function HomeScreen({ navigation }) {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View style={{ padding: 10 }}>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', }}>
      <View style={{
        backgroundColor: '#fff',
      }}>
        <View
          style={{
            backgroundColor: '#08943c',
            height: 70,
          }}>
          <TouchableOpacity>
            <Image
              style={{
                width: 30,
                margin: 10,
                height: 25,
                top: 10,
                left: 10,
              }}
              source={require('./img/menu2.png')}
            // resizeMode="contain"
            />
          </TouchableOpacity>
          <Image
            style={{
              width: 20,
              height: 30,
              position: "absolute",
              right: 20,
              top: 15,
              tintColor: "#fff"
            }}
            source={require('./img/menu1.png')}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={{
            top: 25,
            left: 20,
            fontSize: 20,
          }}>Download From Here</Text>
          <Image
            style={{
              width: 130,
              height: 90,
              position: "absolute",
              right: 20,
            }}
            source={require('./img/1.png')}
            resizeMode="contain"
          />
          <Text style={{
            fontSize: 20,
            color: "#08943c",
            top: 50,
            left: 20,
          }}>View Diet Plane</Text>
          <Text style={{
            fontWeight: "200",
            fontSize: 20,
            top: 60,
            left: 20,
          }}>Meal Plan</Text>
          <Text style={{
            fontSize: 15,
            top: 60,
            left: 20,
          }}>12/5/2021</Text>
          <Text style={{
            fontSize: 12,
            top: 60,
            marginLeft: 20,
            marginRight: 20,
          }}>A healthy eating plan: Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products. Includes lean meats, poultry, fish, beans, eggs, nuts. Linit saturated and trans fats, sodium, and added sugars.</Text>
          <View style={{
            top: 50,
            height: 50,
            backgroundColor: '#fff',
            zIndex: -100,
          }}></View>
        </View >
      </View>
      <FlatList style={{
        top: 20,
      }}
        data={this.state.dataArray}
        renderItem={(item) =>
          <View style={{
          }}>


            <Text style={{
              color: "#08943c",
              top: 70,
              marginLeft: 20,
              fontWeight: "bold",
              fontSize: 20,
            }}>Sunday</Text>

            {/* Lunch Code */}

            <View style={{ flexDirection: 'row', alignItems: 'center', top: 90, }}>
              <View style={{ width: 120, height: 1, backgroundColor: 'black', left: 20, }} />
              <View>
                <Text style={{ left: 30, color: "#08943c", fontSize: 20, }}>BreakFast</Text>
              </View>
              <View style={{ width: 120, height: 1, backgroundColor: 'black', left: 40, }} />
            </View>
            <View style={{

              top: 100,
              // marginLeft: 20,
            }}>
              <Text
                style={{
                  fontSize: 15,
                  left: 20,
                }}>Item 1</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -20,
              }}>Eggs & Onion Scramble</Text>
              <Text style={{
                fontSize: 15,
                left: 20,
              }}>View Recipe{"\n"} Direction</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -40,
              }}>Direction are for original recipe{"\n"}of 1 omelet.{"\n"}1. Dice onion. Whisk eggs and add{"\n"}the onion, pepper, and vinegar.{"\n"}2. Heat a pan over medium heat{"\n"}and coat with non-stick spray. </Text>
              <Text style={{
                fontSize: 15,
                left: 20,
                top: -30,
              }}>View Grocery{"\n"}List</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -70,
              }}>Cabbage, Onion, Red bell pepper,{"\n"} Parsley</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', top: 70, }}>
              <View style={{ width: 120, height: 1, backgroundColor: '#08943c', left: 130, }} />
            </View >
            <View style={{

              top: 100,
            }}>
              <Text
                style={{
                  fontSize: 15,
                  left: 20,
                }}>Item 2</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -20,
              }}>Eggs & Onion Scramble</Text>
              <Text style={{
                fontSize: 15,
                left: 20,
              }}>View Recipe{"\n"} Direction</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -40,
              }}>Direction are for original recipe{"\n"}of 1 omelet.{"\n"}1. Dice onion. Whisk eggs and add{"\n"}the onion, pepper, and vinegar.{"\n"}2. Heat a pan over medium heat{"\n"}and coat with non-stick spray. </Text>
              <Text style={{
                fontSize: 15,
                left: 20,
                top: -30,
              }}>View Grocery{"\n"}List</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -70,
              }}>Cabbage, Onion, Red bell pepper,{"\n"} Parsley</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', top: 70, }}>
              <View style={{ width: 120, height: 1, backgroundColor: '#08943c', left: 130, }} />
            </View >
            <View style={{ flexDirection: 'row', alignItems: 'center', top: 90, }}>
              <View style={{ width: 120, height: 1, backgroundColor: 'black', left: 20, }} />
              <View>
                <Text style={{ left: 30, color: "#08943c", fontSize: 20, }}>Lunch</Text>
              </View>
              <View style={{ width: 120, height: 1, backgroundColor: 'black', left: 40, }} />
            </View>
            <View style={{

              top: 100,
              // marginLeft: 20,
            }}>
              <Text
                style={{
                  fontSize: 15,
                  left: 20,
                }}>Item 1</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -20,
              }}>Eggs & Onion Scramble</Text>
              <Text style={{
                fontSize: 15,
                left: 20,
              }}>View Recipe{"\n"} Direction</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -40,
              }}>Direction are for original recipe{"\n"}of 1 omelet.{"\n"}1. Dice onion. Whisk eggs and add{"\n"}the onion, pepper, and vinegar.{"\n"}2. Heat a pan over medium heat{"\n"}and coat with non-stick spray. </Text>
              <Text style={{
                fontSize: 15,
                left: 20,
                top: -30,
              }}>View Grocery{"\n"}List</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -70,
              }}>Cabbage, Onion, Red bell pepper,{"\n"} Parsley</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', top: 70, }}>
              <View style={{ width: 120, height: 1, backgroundColor: '#08943c', left: 130, }} />
            </View >
            <View style={{

              top: 100,
              // marginLeft: 20,
            }}>
              <Text
                style={{
                  fontSize: 15,
                  left: 20,
                }}>Item 2</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -20,
              }}>Eggs & Onion Scramble</Text>
              <Text style={{
                fontSize: 15,
                left: 20,
              }}>View Recipe{"\n"} Direction</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -40,
              }}>Direction are for original recipe{"\n"}of 1 omelet.{"\n"}1. Dice onion. Whisk eggs and add{"\n"}the onion, pepper, and vinegar.{"\n"}2. Heat a pan over medium heat{"\n"}and coat with non-stick spray. </Text>
              <Text style={{
                fontSize: 15,
                left: 20,
                top: -30,
              }}>View Grocery{"\n"}List</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -70,
              }}>Cabbage, Onion, Red bell pepper,{"\n"} Parsley</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', top: 70, }}>
              <View style={{ width: 120, height: 1, backgroundColor: '#08943c', left: 130, }} />
            </View >
            <View style={{ flexDirection: 'row', alignItems: 'center', top: 90, }}>
              <View style={{ width: 120, height: 1, backgroundColor: 'black', left: 20, }} />
              <View>
                <Text style={{ left: 30, color: "#08943c", fontSize: 20, }}>Snacks</Text>
              </View>
              <View style={{ width: 120, height: 1, backgroundColor: 'black', left: 40, }} />
            </View>
            <View style={{

              top: 100,
              // marginLeft: 20,
            }}>
              <Text
                style={{
                  fontSize: 15,
                  left: 20,
                }}>Item 1</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -20,
              }}>Eggs & Onion Scramble</Text>
              <Text style={{
                fontSize: 15,
                left: 20,
              }}>View Recipe{"\n"} Direction</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -40,
              }}>Direction are for original recipe{"\n"}of 1 omelet.{"\n"}1. Dice onion. Whisk eggs and add{"\n"}the onion, pepper, and vinegar.{"\n"}2. Heat a pan over medium heat{"\n"}and coat with non-stick spray. </Text>
              <Text style={{
                fontSize: 15,
                left: 20,
                top: -30,
              }}>View Grocery{"\n"}List</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -70,
              }}>Cabbage, Onion, Red bell pepper,{"\n"} Parsley</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', top: 70, }}>
              <View style={{ width: 120, height: 1, backgroundColor: '#08943c', left: 130, }} />
            </View >
            <View style={{

              top: 100,
              // marginLeft: 20,
            }}>
              <Text
                style={{
                  fontSize: 15,
                  left: 20,
                }}>Item 2</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -20,
              }}>Eggs & Onion Scramble</Text>
              <Text style={{
                fontSize: 15,
                left: 20,
              }}>View Recipe{"\n"} Direction</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -40,
              }}>Direction are for original recipe{"\n"}of 1 omelet.{"\n"}1. Dice onion. Whisk eggs and add{"\n"}the onion, pepper, and vinegar.{"\n"}2. Heat a pan over medium heat{"\n"}and coat with non-stick spray. </Text>
              <Text style={{
                fontSize: 15,
                left: 20,
                top: -30,
              }}>View Grocery{"\n"}List</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -70,
              }}>Cabbage, Onion, Red bell pepper,{"\n"} Parsley</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', top: 70, }}>
              <View style={{ width: 120, height: 1, backgroundColor: '#08943c', left: 130, }} />
            </View >
            <View style={{ flexDirection: 'row', alignItems: 'center', top: 90, }}>
              <View style={{ width: 120, height: 1, backgroundColor: 'black', left: 20, }} />
              <View>
                <Text style={{ left: 30, color: "#08943c", fontSize: 20, }}>Dinner</Text>
              </View>
              <View style={{ width: 120, height: 1, backgroundColor: 'black', left: 40, }} />
            </View>
            <View style={{

              top: 100,
              // marginLeft: 20,
            }}>
              <Text
                style={{
                  fontSize: 15,
                  left: 20,
                }}>Item 1</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -20,
              }}>Eggs & Onion Scramble</Text>
              <Text style={{
                fontSize: 15,
                left: 20,
              }}>View Recipe{"\n"} Direction</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -40,
              }}>Direction are for original recipe{"\n"}of 1 omelet.{"\n"}1. Dice onion. Whisk eggs and add{"\n"}the onion, pepper, and vinegar.{"\n"}2. Heat a pan over medium heat{"\n"}and coat with non-stick spray. </Text>
              <Text style={{
                fontSize: 15,
                left: 20,
                top: -30,
              }}>View Grocery{"\n"}List</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -70,
              }}>Cabbage, Onion, Red bell pepper,{"\n"} Parsley</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', top: 70, }}>
              <View style={{ width: 120, height: 1, backgroundColor: '#08943c', left: 130, }} />
            </View >
            <View style={{

              top: 100,
              // marginLeft: 20,
            }}>
              <Text
                style={{
                  fontSize: 15,
                  left: 20,
                }}>Item 2</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -20,
              }}>Eggs & Onion Scramble</Text>
              <Text style={{
                fontSize: 15,
                left: 20,
              }}>View Recipe{"\n"} Direction</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -40,
              }}>Direction are for original recipe{"\n"}of 1 omelet.{"\n"}1. Dice onion. Whisk eggs and add{"\n"}the onion, pepper, and vinegar.{"\n"}2. Heat a pan over medium heat{"\n"}and coat with non-stick spray. </Text>
              <Text style={{
                fontSize: 15,
                left: 20,
                top: -30,
              }}>View Grocery{"\n"}List</Text>
              <Text style={{
                fontSize: 15,
                left: 150,
                top: -70,
              }}>Cabbage, Onion, Red bell pepper,{"\n"} Parsley</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', top: 70, }}>
              <View style={{ width: 120, height: 1, backgroundColor: '#08943c', left: 130, }} />
            </View >
          </View >


        }
        keyExtractor={item => item.id}
      />
    </View>
  );
}


const StackHome = createStackNavigator();


const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({

});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
    };
  }

  componentDidMount() {
    fetch('https://thefoodpharmacy.pk/api/auth/diet/14')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ dataArray: json.response });
        console.log(json.response);
        Alert.alert("ok");
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="MenuTab">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Settings" component={NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;































// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

// export default function App() {
//   const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
//   return (
//     <View style={
//       styles.screen
//     }>
//       <View style={styles.TextContainer}>
//         <TextInput style={styles.TextInput}
//           placeholder="Course Goat"
//         // placeholderTextColor="red"
//         />
//         <Button title="Add" />
//       </View>
//       <View />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: { padding: 10, },
//   TextContainer: {
//     flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20,
//   },
//   TextInput: { width: '80%', borderColor: 'black', borderWidth: 1, padding: 10, }
// });




    // <View style={{
    //   padding: 30,
    //   flexDirection: 'row',
    //   width: '100%',
    //   height: 300,
    //   justifyContent: 'space-evenly',
    // }}>

    //   <View style={{
    //     backgroundColor: 'red',
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    //   }}>
    //     <Text>1</Text>
    //   </View>
    //   <View style={{
    //     backgroundColor: 'blue',
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    //   }}>
    //     <Text>2</Text>
    //   </View>
    //   <View style={{
    //     backgroundColor: 'green',
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    //   }}>
    //     <Text>3</Text>
    //   </View>

    // </View>

