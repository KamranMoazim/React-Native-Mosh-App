import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import {Image} from "react-native-expo-image-cache";

import colors from '../config/colors'
import AppText from './AppText/AppText'

//   {/*(image)*/}   {/*{uri:imageUrl}*/}

export default function Card({title, subTitle, imageUrl, onPress, thumbnailUrl}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                {/* <Image style={styles.image} source={{uri:imageUrl}} />  */}
                <Image style={styles.image} tint="light" preview={{uri:thumbnailUrl}} uri={imageUrl} /> 
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle} >{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:20,
        overflow:"hidden"
    },
    detailsContainer:{
        // paddingLeft:"5%",
        // paddingVertical:"2%"
        padding:20
    },
    title:{
        paddingBottom:10
    },
    subTitle:{
        color:colors.secondary,
        fontWeight:"bold"
    },
    image:{
        width:"100%",
        height:200,
        // borderRadius:15,    // rather than using this we used overflow:"hidden" in above card style
    },
})
