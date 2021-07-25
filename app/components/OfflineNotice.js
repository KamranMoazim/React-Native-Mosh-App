import React from 'react'
import { StyleSheet, View } from 'react-native'
import {useNetInfo} from "@react-native-community/netinfo"
import Constants from "expo-constants";

import AppText from './AppText/AppText';
import colors from '../config/colors';


export default function OfflineNotice() {

    const netInfo = useNetInfo()
    // console.log(netInfo)

    if(!netInfo.isWifiEnabled && netInfo.isInternetReachable !== false)
        return (
            <View style={styles.container}>
                <AppText style={{color:colors.white}}>Internet is not available!</AppText>
            </View>
        )

    return null;
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        justifyContent:"center",
        alignItems:"center",
        marginTop:Constants.statusBarHeight,
        height:50,
        width:"100%",
    }
})
