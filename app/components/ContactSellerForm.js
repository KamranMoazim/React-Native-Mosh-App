import React,{ useState }  from 'react'
import { Alert, View, StyleSheet } from "react-native";
import * as Notifications from "expo-notifications"

import messageApi from "../api/messages";
import AppTextInput from "./AppTextInput";
import AppButton from "./AppButton";

function ContactSellerForm({ listing }) {

    const [message, setMessage] = useState("Is this available???")
    let listingId = listing.id;
    const handleSubmit = async () => {   // ,{resetForm}
        const result = await messageApi.send(message, listingId)
        if (!result.ok) {
            console.log("Error", result)
            return Alert.alert("Error", "Could not send message to listing user.")
        } else {
            Alert.alert("Amazing!", `Your message has sent to seller regarding ${listing.title}`);
            const showotifaications = () => {
                Notifications.scheduleNotificationAsync({
                  content:{
                    title:"Congratulations",
                    body:`Your message has sent to seller regarding ${listing.title}`,
                  },
                  trigger:{
                    seconds:1,
                  },
                })
                Notifications.setNotificationHandler({
                    handleNotification: async () => ({
                        shouldShowAlert: true,
                        shouldPlaySound: true,
                        shouldSetBadge: false,
                    }),
                });
            }
            showotifaications();
        }
        // resetForm();
    }

//     const showotifaications = () => {
//     Notifications.scheduleNotificationAsync({
//       content:{
//         title:"Congratulations",
//         body:"Your Listings have posted!",
//       },
//       trigger:{
//         seconds:1,
//       },
//     })
//     Notifications.setNotificationHandler({   // for showing notification foreground while using app
//         handleNotification: async () => ({
//           shouldShowAlert: true,
//           shouldPlaySound: true,
//           shouldSetBadge: false,
//         }),
//       });
//   }

    return (
        <View style={styles.container}>
            <AppTextInput icon="message" onChangeText={(text)=>setMessage(text)} />
            <AppButton title="Message Seller" color="primary" onPress={() => handleSubmit()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:10
    }
})


export default ContactSellerForm;