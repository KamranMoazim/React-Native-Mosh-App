import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../config/colors'

export default function ListItemSeparator() {
    return (
        <View style={styles.line} />
    )
}

const styles = StyleSheet.create({
    line:{
        height:1,
        width:"100%", 
        backgroundColor:colors.light
    }
})
