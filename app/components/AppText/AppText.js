import React from 'react'
import { Text } from "react-native";


import styles from './Styles';


export default function AppText({children, style, ...otherProps}) {

    return (
    <Text style={[styles.text, style]} {...otherProps}>
        { children }
    </Text>
    )
}



// const styles = StyleSheet.create({
//     text:{
//         color:"yellow",
//         fontSize: Platform.OS === "android" ? 18 : 20 ,
//         fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir" ,
//   },
// })
  
