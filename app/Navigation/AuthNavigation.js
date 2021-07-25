import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import WelcomeScreen from "../screens/WelcomeScreen"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import routes from "./routes"


const Stack = createStackNavigator()
const AuthStackNavigator = () => {
    return <Stack.Navigator>
        <Stack.Screen 
            // name="Welcome" 
            name={routes.WELCOME}
            component={WelcomeScreen} 
            options={{ headerShown:false }} 
        />
        <Stack.Screen 
            // name="Login" 
            name={routes.LOGIN}
            component={LoginScreen} 
        />
        <Stack.Screen 
            // name="Register" 
            name={routes.REGISTER}
            component={RegisterScreen} 
        />
    </Stack.Navigator>
}

export default AuthStackNavigator;