import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';


function AppButton({title, onPress, color}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor:colors[color]}]} onPress={onPress}> 
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button:{
        borderRadius:25,
        justifyContent:'center',
        alignItems:"center",
        padding:15,
        width:"100%",
        marginTop:10,
    },
    text: {
        color:colors.white,
        fontSize: 18,
        fontWeight: "bold",
        textTransform:"uppercase"
    }
})


export default AppButton;