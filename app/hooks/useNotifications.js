import {useEffect} from "react"
import * as Notifications from 'expo-notifications';
// import routes from "./routes";
import expoPushTokensApi from "../api/expoPushTokens";
// import navigation from "./rootNavigation"

export const useNotifications = (notificationListener) => {

    const registerForPushNotifications = async () => {
        try {
            const permission = await Notifications.getPermissionsAsync();
            if(!permission.granted) return;
            const token = await Notifications.getExpoPushTokenAsync();
            expoPushTokensApi.register(token);
        } catch (error) {
            console.log("Erro while setting Push Notification Token", error);
        }
    }

    useEffect(()=>{
        registerForPushNotifications();

        if(notificationListener) Notifications.addPushTokenListener(notificationListener);

    },[])

}

// (notification)=>{
//     // console.log(notification)
//     navigation.navigate(routes.ACCOUNT)
// }