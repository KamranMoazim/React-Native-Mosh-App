import React from 'react'
import { Alert, Button, View, StyleSheet, Text } from "react-native";
import * as Notifications from "expo-notifications"

import messageApi from "../api/messages";
import AppTextInput from "./AppTextInput";
import { useState } from "react";

function ContactSellerForm({ listing }) {

    const [message, setMessage] = useState("this is default message")

    const handleSubmit = async (message) => {   // ,{resetForm}
        const result = await messageApi.send(message, listing.id)
        if (!result.ok) {
            console.log("Error", result)
            return Alert.alert("Error", "Could not send message to listing user.")
        }
        // resetForm();
        Notifications.scheduleNotificationAsync({
            content:{
                title:"Awsome!",
                body:"Your message has sent to seller.",
            },
            trigger:{
                seconds:2,
            },
        })
    } //setMessage
    return (
        <View style={styles.container}>
            <Text onChangeText={(e)=>setMessage(e.target.value)} />
            {/* <AppTextInput icon="email" onChangeText={(text)=>setMessage(text)} /> */}
            <Button title="Contact Seller" onPress={() => handleSubmit(message)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:10
    }
})


export default ContactSellerForm;