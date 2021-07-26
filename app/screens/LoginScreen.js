import React, { useContext, useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import * as Yup from "yup"
// import jwtDecode from "jwt-decode"


import Screen from '../components/Screen'
// import AppForm from '../components/Form'
// import AppFormField from '../components/Form'
// import SubmitButton from '../components/Form'
import { AppForm, AppFormField, SubmitButton, ErrorMessage } from "../components/Form";
import authApi from "../api/auth";
// import AuthContext from '../auth/AuthContext'
// import authStorage from "../auth/storage"
import useAuth from '../auth/useAuth'


const validationSchema = Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
})

export default function LoginScreen({navigation}) {

    const [loginFailed, setLoginFailed] = useState(false);

    // const {setUser} = useContext(AuthContext)
    const { Login } = useAuth()

    const handleSubmit = async ({email, password}) => {
        const response = await authApi.login(email, password);
        if (!response.ok) return setLoginFailed(true)
        setLoginFailed(false);

        // const user = jwtDecode(response.data)
        // setUser(user)
        // authStorage.storeToken(response.data);
        Login(response.data)
    }

    return (
        <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />

            {/* <Formik
            initialValues={{ email:"", password:"" }}
            onSubmit={(values)=>console.log(values)}
            validationSchema={validationSchema}
            >
                {()=>( */}
                    <ErrorMessage error="Invalid email and/or password." visible={loginFailed} />
                    <AppForm 
                        initialValues={{ email:"", password:"" }}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        <AppFormField 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            placeholder="Email"
                            textContentType="emailAddress"  // works only in iOS
                            // onChangeText={(text)=>setEmail(text)}
                            // onChangeText={handleChange("email")}
                            // onBlur={()=>{setFieldTouched("email")}}
                            name="email"
                        />
                        {/* <ErrorMessage error={errors.email} visible={touched.email} /> */}
                        <AppFormField 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            secureTextEntry={true}
                            textContentType="password"  // works only in iOS
                            // onChangeText={handleChange("password")}
                            // onBlur={()=>{setFieldTouched("password")}}
                            name="password"
                        />
                        {/* <ErrorMessage error={errors.password} visible={touched.password} /> */}
                        <SubmitButton title="Login" color="primary" />
                    </AppForm>
                {/* )}
            </Formik> */}


        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    logo:{
        height:80,
        width:80,
        marginTop:50,
        marginBottom:20,
        alignSelf:"center"
    }
})
