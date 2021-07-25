import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'


import defaultStyles from "../config/styles"

const AppTextInput = ({icon, ...otherProps}) => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.balck} style={styles.icon} />
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:defaultStyles.colors.light,
        width:"100%",
        padding: 15,
        paddingVertical:10,
        borderRadius:25,
        marginTop:10,
    },
    icon:{
        marginRight:10,
    }
})
