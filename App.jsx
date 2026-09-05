// react-native and stylig basics
// ------------------------------------------------------------------------------------------------------------------------------------------
// import {
//   Image,
//   Text,
//   View,
//   StatusBar,
//   Button,
//   TouchableOpacity,
//   Alert,
//   Pressable,
//   StyleSheet,
// } from 'react-native';

// const App = () => {
//   // styling through JS object
//   const style = {
//     textStyling: {
//       color: 'white',
//       fontWeight: 'bold',
//       fontSize: 18,
//     },
//     viewStyling: {
//       paddingTop: StatusBar.currentHeight,
//       backgroundColor: 'black',
//       height: '100%',
//       width: '100%',
//       paddingHorizontal: 5,
//       gap: 5,
//     },
//   };

//   return (
//     <View style={style.viewStyling}>
//       <Text style={style.textStyling}>Hello bhaijaan!</Text>

//       <Image
//         style={{ width: 300, height: 200 }}
//         source={{
//           uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTnvu8Nf0dXxgs6jXSqnjD-kGQCfDdaEsnf2lkyqiOg&s=10',
//         }}
//       ></Image>

//       <Button
//         title="log out"
//         onPress={() => Alert.alert('Logged out!')}
//       ></Button>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => Alert.alert('You touched the button!')}
//       >
//         <Text style={styles.buttonText}>Touch me</Text>
//       </TouchableOpacity>

//       <Pressable
//         style={styles.button}
//         onPress={() => Alert.alert('You pressed!')}
//       >
//         <Text style={styles.buttonText}>Press me</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default App;

// // styling through StyleSheet
// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: 'green',
//     padding: '5px',
//     paddingVertical: 7,
//     paddingHorizontal: 15,
//     width: 200,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });
// -------------------------------------------------------------------------------------------------------------------------------------------

//flex and scroll view practice
// --------------------------------------------------------------------------------------------------------------------------------------------
// import { ScrollView, StyleSheet, View } from 'react-native';
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const App = () => {
//   return (
//     <SafeAreaView>
//       <ScrollView
//         horizontal
//         contentContainerStyle={{ gap: 10 }}
//         // style={styles.containers}
//       >
//         <View style={styles.container1}></View>
//         <View style={styles.container2}></View>
//         <View style={styles.container3}></View>
//         <View style={styles.container1}></View>
//         <View style={styles.container2}></View>
//         <View style={styles.container3}></View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 10,
//     backgroundColor: 'black',
//   },
//   container1: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: 'red',
//   },
//   container2: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: 'yellow',
//   },
//   container3: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: 'green',
//   },
// });
// ------------------------------------------------------------------------------------------------------------------------------------

// flatlist practice (looping dataset and displaying in card format)
// -------------------------------------------------------------------------------------------------------------------------------------------

// import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import React from 'react';

// dummy data
// const dummy = [
//   {
//     id: 1,
//     name: 'Azan Khan',
//     email: 'azankhan@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 2,
//     name: 'Naeemullah',
//     email: 'naeemullah@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 3,
//     name: 'Muskan',
//     email: 'muskan123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 4,
//     name: 'Anny',
//     email: 'anny123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 5,
//     name: 'John',
//     email: 'john123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 6,
//     name: 'Harsh',
//     email: 'harsh123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 7,
//     name: 'Somi',
//     email: 'somi123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 8,
//     name: 'Sarthak',
//     email: 'sarthak123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 9,
//     name: 'Rishu',
//     email: 'rishu123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 10,
//     name: 'Arin',
//     email: 'arin123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 11,
//     name: 'Aryan',
//     email: 'aryan123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 12,
//     name: 'Ali',
//     email: 'ali123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 13,
//     name: 'Anju',
//     email: 'anju123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 14,
//     name: 'Manali',
//     email: 'manali123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 15,
//     name: 'LoLu',
//     email: 'lolu123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 16,
//     name: 'Golu',
//     email: 'golu123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 17,
//     name: 'Dummy',
//     email: 'dummy123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 18,
//     name: 'Akarsh',
//     email: 'akarsh123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 19,
//     name: 'Aayush',
//     email: 'aayush123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 20,
//     name: 'Ankur',
//     email: 'ankur123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 21,
//     name: 'Vedant',
//     email: 'vedant123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 22,
//     name: 'Pradeep',
//     email: 'pradeep123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 23,
//     name: 'Kittu',
//     email: 'kittu123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
//   {
//     id: 24,
//     name: 'Kittu',
//     email: 'kittu123@gmail.com',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7L-dIuWttEj87TqAJQk479PTDuRCZ32sIFSsqJCPw&s=10',
//   },
// ];

// const App = () => {
//   return (
//     <SafeAreaView style={styles.mainContainer}>
//       <FlatList
//         data={dummy}
//         keyExtractor={item => item.id}
//         numColumns={2}
//         columnWrapperStyle={{ gap: 10 }}
//         ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
//         renderItem={({ item }) => (
//           // card
//           <View style={styles.card}>
//             <Image
//               style={styles.cardImage}
//               source={{
//                 uri: item.image,
//               }}
//             ></Image>
//             <Text style={styles.cardName}>{item.name}</Text>
//             <Text style={styles.cardEmail}>{item.email}</Text>
//           </View>
//         )}
//       ></FlatList>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     padding: 10,
//   },
//   card: {
//     backgroundColor: 'white',
//     height: 110,
//     width: 200,
//     borderRadius: 10,
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cardImage: { width: 60, height: 60, borderRadius: 50 },
//   cardName: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   cardEmail: {
//     fontSize: 15,
//     justifyContent: 'center',
//   },
// });
// ---------------------------------------------------------------------------------------------------------------------------------------

// user input and useState practice
// ----------------------------------------------------------------------------------------------------------------------------------------

// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import React, { useState } from 'react';

// const App = () => {
//   const [text, setText] = useState('');
//   const [prevText, setprevText] = useState('');

//   const handleSubmit = () => {
//     setprevText(text);
//     setText('');
//   };

//   return (
//     <SafeAreaView style={styles.mainContainer}>
//       <Text style={styles.textGreet}>Welcome to Naeverse!</Text>
//       <TextInput
//         placeholder="Enter yor name"
//         style={styles.input}
//         value={text}
//         onChangeText={setText}
//       ></TextInput>
//       <Button title="Submit" onPress={handleSubmit}></Button>

//       {prevText && (
//         <Text style={styles.textGreet}>
//           Pleasure to have you here {prevText.toUpperCase()}!
//         </Text>
//       )}
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   mainContainer: {
//     backgroundColor: 'black',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 10,
//     paddingHorizontal: 10,
//   },
//   textGreet: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   input: {
//     backgroundColor: 'silver',
//     width: '100%',
//     borderRadius: 10,
//     fontSize: 18,
//     padding: 10,
//   },
// });
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// stack navigation practice
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

// import { StyleSheet, Text, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { enableScreens } from 'react-native-screens';
// import Home from './src/screens/Home';
// import Search from './src/screens/Search';
// import Profile from './src/screens/Profile';

// enableScreens();
// const Stack = createNativeStackNavigator();

// const StackNavigtor = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         // options={{ headerShown: false }}
//         // options={{title:"Home Screen"}}
//         // options={{ headerStyle: { backgroundColor: 'black' } }}
//       />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Search" component={Search} />
//     </Stack.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <StackNavigtor />
//     </NavigationContainer>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

// ----------------------------------------------------------------------------------------------------------------------------------------------------

// tab navigation practice
// ----------------------------------------------------------------------------------------------------------------------------------------------------

import { StyleSheet } from 'react-native';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './src/screensForTabnavigation/Profile';
import Home from './src/screensForTabnavigation/Home';
import Search from './src/screensForTabnavigation/Search';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

// --------------------------------------------------------|
// website for icons:                                      |
// https://oblador.github.io/react-native-vector-icons/    |
// --------------------------------------------------------|

enableScreens();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        // tabBarActiveBackgroundColor: 'pink',
        tabBarLabelStyle: {
          fontSize: 14,
        },
        // tabBarStyle: {
        //   height: 80,
        // },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
