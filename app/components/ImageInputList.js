import React, { useRef } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import ImageInput from './ImageInput';

export default function ImageInputList({imageUris=[], onAddImageUri, onRemoveImageUri}) {

  const scrollRef = useRef()

    return (
      <View>
        <ScrollView horizontal={true} ref={scrollRef} onContentSizeChange={()=>scrollRef.current.scrollToEnd()} >
          <View style={styles.conatiner}>

            {imageUris.map((imageUri,index)=>{
              return <ImageInput imageUri={imageUri} key={index} onChangeImageUri={()=>onRemoveImageUri(imageUri)} />
            })}
            
            <ImageInput onChangeImageUri={(uri)=>onAddImageUri(uri)} />

          </View>
        </ScrollView>
      </View> 
    )
}

const styles = StyleSheet.create({
  conatiner:{
      flexDirection:"row",
  },
})
