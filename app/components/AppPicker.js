import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import React, { useState } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'

import colors from '../config/colors'
import AppText from './AppText/AppText'
import PickerItem from './PickerItem'

const AppPicker = ({icon, items, selectedItem, setSelectedItem, placeholder, PickerItemComponent = PickerItem }) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
                <View style={styles.container}>
                    <MaterialCommunityIcons name={icon} size={20} color={colors.balck} style={styles.icon} />

                    <AppText style={styles.text}>{selectedItem?selectedItem.label:placeholder?placeholder:"Category"}</AppText>

                    {/* {selectedItem ? (
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                    ) : (
                        <AppText style={styles.text}>{placeholder}</AppText>
                    )} */}

                    <MaterialCommunityIcons name="chevron-down" size={20} color={colors.balck} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Button title="Close" onPress={()=>setModalVisible(false)} />
                <FlatList 
                    data={items}
                    // keyExtractor={(item)=>item.value}
                    keyExtractor={(item)=>item.value.toString()}
                    renderItem={({item})=> <PickerItemComponent 
                                                item={item} 
                                                onPress={()=>{
                                                    setSelectedItem(item);
                                                    setModalVisible(false)
                                                }}
                                            />
                            }
                />
            </Modal>
        </>
    )
}

export default AppPicker

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:colors.light,
        width:"100%",
        padding: 15,
        paddingVertical:10,
        borderRadius:25,
        marginTop:10,
    },
    icon:{
        marginRight:10,
    },
    text:{
        flex:1,
        color:colors.medium
    }
})
