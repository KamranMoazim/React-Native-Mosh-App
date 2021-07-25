import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Platform, StatusBar } from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText/AppText';
// import colors from "../config/colors";

export default function WelcomeScreen({navigation}) {
    return (
        <ImageBackground
            blurRadius={2}
            style={styles.background} 
            source={require("../assets/background.jpg")}>

            <View style={styles.logoContainer} >
                <Image style={styles.logo} source={require("../assets/logo-red.png")} />
                {/* <Text style={{top:"5%"}}>Sell what you Dont't Need!</Text> */}
                <AppText style={{fontSize:25, fontWeight:"bold", paddingVertical:10}}>Sell what you Dont't Need!</AppText>
            </View>

            <View style={styles.buttonsContainer}>
                {/* <View style={styles.login} ></View> */}
                <AppButton title="Login" onPress={()=>navigation.navigate("Login")}  color="primary" />
                {/* <View style={styles.signup} ></View> */}
                <AppButton title="Register" onPress={()=>navigation.navigate("Register")} color="secondary" />
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,      // to cover whole area
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight  : 0,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center",
    },
    logo:{
        height:100,
        width:100,
    },
    // login:{
    //     backgroundColor: colors.primary,
    //     width:"100%",
    //     height:70,
    // },
    // signup:{
    //     backgroundColor: colors.secondary,
    //     width:"100%",
    //     height:70,
    // },
    buttonsContainer:{
        padding:15,
        width:"100%",
    }
})

