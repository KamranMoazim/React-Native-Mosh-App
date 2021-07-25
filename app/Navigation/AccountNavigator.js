import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import AccountScreen from '../screens/AccountScreen'
import MessagesScreen from '../screens/MessagesScreen'
import routes from "./routes";




const Stack = createStackNavigator()
const AccountStackNavigator = () => {
    return <Stack.Navigator headerMode="float" mode="modal">
        <Stack.Screen 
            // name="Account"
            name={routes.ACCOUNT} 
            component={AccountScreen} 
        />
        <Stack.Screen 
            // name="MessagesScreen"
            name={routes.MESSAGE_SCREEN} 
            component={MessagesScreen} 
        />
    </Stack.Navigator>
}

export default AccountStackNavigator;