import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, {useEffect} from 'react'
import { StyleSheet, View, Image, Alert, TouchableWithoutFeedback } from 'react-native'
import * as ImagePicker from "expo-image-picker";

import colors from '../config/colors'

export default function ImageInput({imageUri=null, onChangeImageUri}) {

    useEffect( ()=>{
        requestPermission()
      },[])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) alert("You need to Allow the Camera Access to get this Feature enabled.")
      }
  
      const handlePress = () => {
          if (!imageUri) selectImage();
          else {
              Alert.alert("Delete", "Are you sure you wants to Delete this Image?", [
                  {text:"Yes", onPress:()=>onChangeImageUri(null)},
                  {text:"No"}
              ])
          }
      }
  
      const selectImage = async () => {
        try {
          const result = ImagePicker.launchImageLibraryAsync({
              mediaTypes:ImagePicker.MediaTypeOptions.Images,
              quality:0.5
          });
          if (!(await result).cancelled) {
            onChangeImageUri((await result).uri);
          }
        } catch (error) {
          console.log("Erro while reading an image", error);
        }
      }


    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.conatiner}>
                {!imageUri && <MaterialCommunityIcons color={colors.medium} name="camera" size={40} />}
                {imageUri && <Image source={{uri:imageUri}} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    conatiner:{
        justifyContent:"center",
        alignItems:"center",
        height:100,
        width:100,
        borderRadius:15,
        backgroundColor:colors.light,
        overflow:"hidden",
        margin:3,
        // flexWrap:"wrap",
    },
    image:{
        height:100,
        width:100,
        borderRadius:15,
    }
})
