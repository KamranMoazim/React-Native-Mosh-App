import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import * as Yup from "yup"


import Screen from '../components/Screen'
// import AppForm from '../components/Form'
// import AppFormField from '../components/Form'
// import SubmitButton from '../components/Form'
import { AppForm, AppFormField, SubmitButton, ErrorMessage } from "../components/Form"
import usersRegisterApi from "../api/users";
import useAuth from '../auth/useAuth'
import authApi from "../api/auth";
import ActivityIndicator from '../components/ActivityIndicator'
import useApi from '../hooks/useApi'


const validationSchema = Yup.object().shape({
    name:Yup.string().required().label("Name"),
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
})

export default function RegisterScreen({navigation}) {

    const registerApi = useApi(usersRegisterApi.register) 
    const loginApi = useApi(authApi.login) 
    const {Login} = useAuth()
    const [error, setError] = useState();
    const [registerFailed, setRegisterFailed] = useState(false);
    // const [loading, setLoading] = useState(false);

    const handleRegister = async (userInfo) => {
        // setLoading(true)
        // const response = await usersRegisterApi.register(userInfo);
        const response = await registerApi.request(userInfo);
        if (!response.ok) {
            setRegisterFailed(true)
            if (response.data) setError(response.data.error)
            else {
                setError("An unexpected error occured.")
                console.log(response)
            }
            // setLoading(false)
            return;
        }
        setRegisterFailed(false)
        // setLoading(false)
        // const { data:authToken } = await authApi.login(userInfo.email, userInfo.password)
        const { data:authToken } = await loginApi.request(userInfo.email, userInfo.password)
        Login(authToken)
    }

    return (
        <Screen style={styles.container}>

            <ActivityIndicator visible={registerApi.loading || loginApi.loading} />

            <AppForm 
                initialValues={{ email:"", password:"", name:"" }}
                onSubmit={handleRegister}
                validationSchema={validationSchema}
            >

                <ErrorMessage error={error} visible={registerFailed} />

                <AppFormField 
                    autoCapitalize="words"
                    autoCorrect={false}
                    icon="account"
                    placeholder="Name"
                    name="name"
                />
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    placeholder="Email"
                    textContentType="emailAddress" 
                    name="email"
                />
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType="password"
                    name="password"
                />
                <SubmitButton title="Register" color="primary" />
            </AppForm>

        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10
    }
})
