import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import ListingsScreen from '../screens/ListingsScreen'
import ListingsDetailsScreen from '../screens/ListingsDetailsScreen'
import routes from "./routes"


const Stack = createStackNavigator()
const FeedStackNavigator = () => {
    return <Stack.Navigator headerMode="float" mode="modal">
                <Stack.Screen 
                    // name="Listings" 
                    name={routes.LISTINGS}
                    component={ListingsScreen} 
                    options={{
                        // headerShown:false
                    }}
                />
                <Stack.Screen 
                    // name="ListingDetails" 
                    name={routes.LISTING_DETAILS}
                    component={ListingsDetailsScreen} 
                    options={{headerShown:false}} 
                />
            </Stack.Navigator>
}

export default FeedStackNavigator;