import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from "react-native";
import AppLoading from 'expo-app-loading';

// COMPONENTS
import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen"
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

// SCREENS
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingsDetailsScreen from './app/screens/ListingsDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ImageInput from './app/components/ImageInput';


import * as ImagePicker from "expo-image-picker";
import ImageInputList from './app/components/ImageInputList';
// import * as Permissions from "expo-permissions";
// import * as Camera from "expo-camera";


import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native"
import { MaterialCommunityIcons } from '@expo/vector-icons';


import AuthStackNavigator from "./app/Navigation/AuthNavigation";
import navigationTheme from './app/Navigation/navigationTheme';
import AppTabNavigator from './app/Navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';

import AuthContext from "./app/auth/AuthContext";
import authStorage from "./app/auth/storage"
// import jwtDecode from "jwt-decode"
import { navigationRef } from "./app/Navigation/rootNavigation"

export default function App() {

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    user ? setUser(user) : setUser(null);
  }

  if (!isReady)  // 
    return (<AppLoading 
      startAsync={restoreUser} 
      onFinish={()=>setIsReady(true)} 
      onError={()=>console.log("object")}
      />) 


  return (
      <AuthContext.Provider value={{user, setUser}}>
        <OfflineNotice /> 
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
          { user ? <AppTabNavigator /> : <AuthStackNavigator /> }
        </NavigationContainer>
      </AuthContext.Provider>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"row",
  },
  cards:{
    backgroundColor:"#f8f4f4",
    padding:20,
    paddingTop:100,
  }
})



















// import NetInfo,{useNetInfo} from "@react-native-community/netinfo"

// export default function App() {

//   // NetInfo.fetch().then(netinfo=>console.log(netinfo))
//   // NetInfo.addEventListener(netinfo=>console.log(netinfo))

//   const netInfo = useNetInfo()
//   console.log(netInfo.isInternetReachable)

//   return (
//         // <NavigationContainer theme={navigationTheme}>
//         //   {/* <AuthStackNavigator /> */}
//         //   <AppTabNavigator />
//         // </NavigationContainer>
//   <View></View>
//   )
// }






// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function App() {

//   const demo = async () => {
//     try {
//       await AsyncStorage.setItem("person", JSON.stringify({id:1}))   
//       const value =  await AsyncStorage.getItem("person")
//       const person = JSON.parse(value);
//       console.log(person)
      
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   demo();




// import Screen from "./app/components/Screen"
// import React from 'react'
// import { StyleSheet, Button } from 'react-native'
// import * as Notifications from "expo-notifications"

// export default function App() {

//   const showotifaications = () => {
//     Notifications.scheduleNotificationAsync({
//       content:{
//         title:"Congratulations",
//         body:"Your Listings have posted!",
//       },
//       trigger:{
//         seconds:1,
//         // repeats:true
//       },
//     })

//     console.log("object")
//   }
  

//   // data:{
//   //   _displayInForeground:true
//   // }

//   return (
//     <Screen>
//       <Button title="Click" onPress={()=>showotifaications()} />
//     </Screen>
//   )
// }

// const styles = StyleSheet.create({})