import React from 'react'
import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../config/colors";

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <View style={styles.closeIcon}>
                    <MaterialCommunityIcons name="close" color={colors.white} size={35} />
                </View>
                <View style={styles.deleteIcon}>
                    <MaterialCommunityIcons name="trash-can-outline" color={colors.white} size={35} />
                </View>
            </View>
            <Image resizeMode="contain" style={styles.image} source={require("../assets/chair.jpg")} />
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.balck,
        flex:1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight*0.5 : 0,
        paddingBottom: 50,
    },
    image:{
        width:"100%",
        height:"100%",
        flex:1
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        top:"15%"
    },
    closeIcon:{
        // position:"absolute",
        // top:15,
        right:25
    },
    deleteIcon:{
        // position:"absolute",
        // top:15,
        left:25
    }
})
