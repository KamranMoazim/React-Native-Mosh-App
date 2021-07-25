import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import colors from '../config/colors'

export default function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        height:80,
        width:80,
        borderRadius:40,
        bottom:20,
        borderColor:colors.white,
        borderWidth:10,
        justifyContent:"center",
        alignItems:"center",
    }
})
