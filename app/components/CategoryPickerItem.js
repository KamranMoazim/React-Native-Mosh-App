import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import AppText from './AppText/AppText'
import Icon from './Icon'

export default function CategoryPickerItem({ item, onPress }) {
    
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Icon name={item.icon} size={50} backgroundColor={item.backgroundColor} />
                {/* <AppText style={styles.text}>{item.name}</AppText> */}
                <AppText style={styles.text}>{item.label}</AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:15,
        alignItems:"center"
    },
    text:{
        padding:15,
    },
})

