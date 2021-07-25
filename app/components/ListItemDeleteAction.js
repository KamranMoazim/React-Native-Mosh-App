import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons" 

import colors from '../config/colors'

export default function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="trash-can" color={colors.white} size={35} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.danger,
        width:80,
        justifyContent:"center",
        alignItems:"center"
    }
})
