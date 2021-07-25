import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import Swipeable from "react-native-gesture-handler/Swipeable" 

import colors from '../config/colors'
import AppText from './AppText/AppText'
import Icon from './Icon'

export default function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>

                    {IconComponent}

                    {image && <Image style={styles.image} source={image} />}

                    <View style={styles.textContainer}>
                        <AppText style={[styles.name]} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.listings} numberOfLines={3}>{subTitle}</AppText>}
                    </View>

                    <MaterialCommunityIcons 
                        // style={styles.chevron} 
                        name="chevron-right" 
                        size={25} 
                        color={colors.medium}
                    />

                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        // paddingHorizontal:15,
        padding:15,
        backgroundColor:colors.white,
        alignItems:"center"
    },
    textContainer:{
        marginLeft:10,
        flex:1,
    },
    image:{
        height:70,
        width:70,
        borderRadius:35,
        // marginRight:10
    },
    name:{
        fontWeight:"bold",
        // justifyContent:"center"
    },
    listings:{
        color:colors.medium,
        fontSize:17
    },
    chevron:{
        // alignItems:"center"
        // alignSelf:"center",
        // color:colors.medium
    }
})
