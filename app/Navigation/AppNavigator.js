import React, { useEffect } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from '@expo/vector-icons'


import ListingEditScreen from '../screens/ListingEditScreen'
// import AccountScreen from '../screens/AccountScreen'
// import ListingsScreen from '../screens/ListingsScreen'
import FeedStackNavigator from './FeedNavigation';
import AccountStackNavigator from './AccountNavigator';
import * as Notifications from 'expo-notifications';
import NewListingButton from './NewListingButton'
import routes from "./routes";
import expoPushTokensApi from "../api/expoPushTokens"


const Tab = createBottomTabNavigator()
const AppTabNavigator = () => {

    // const registerForPushNotifications = async () => {
    //     try {
    //         const permission = await Notifications.getPermissionsAsync();
    //         if(!permission.granted) return;
    //         const token = await Notifications.getExpoPushTokenAsync();
    //         expoPushTokensApi.register(token);
    //     } catch (error) {
    //         console.log("Erro while setting Push Notification Token", error);
    //     }
    // }
    // useEffect(()=>{
    //     registerForPushNotifications();
    //     Notifications.addPushTokenListener((notification)=>console.log(notification))
    // },[])

    return <Tab.Navigator>
        {/* <Tab.Screen name="Listings" component={ListingsScreen} /> */}
        <Tab.Screen 
            // name="Feed" 
            name={routes.FEED}
            component={FeedStackNavigator} 
            options={{
                tabBarIcon:({size, color})=>
                    {return <MaterialCommunityIcons name="home" color={color} size={size} />}
            }}
        />
        <Tab.Screen 
            // name="ListingEdit" 
            name={routes.LISTING_EDIT}
            component={ListingEditScreen} 
            options={ ({navigation}) => ({
                tabBarButton:()=>(<NewListingButton onPress={()=>navigation.navigate("ListingEdit")} />),
            })} 
        />
        <Tab.Screen 
            // name="Account" 
            name={routes.ACCOUNT}
            component={AccountStackNavigator} 
            options={{
                tabBarIcon:({size, color})=>
                    <MaterialCommunityIcons name="account" color={color} size={size} />
            }} 
        />
        {/* <Tab.Screen name="Account" component={AccountScreen} /> */}
    </Tab.Navigator>
}

export default AppTabNavigator;