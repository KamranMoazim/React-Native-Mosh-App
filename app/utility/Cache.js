import AsyncStorage from "@react-native-async-storage/async-storage"
import moment from "moment"

const prefix = "chache";
const expiry = 5;  // in minutes

const checkExpiry = (timestamp) => {
    const now = moment(Date.now());
    const storedTime = moment(timestamp);
    return isExpired = now.diff(storedTime, "minutes") > expiry;
}

const store = async (key, value) => {

    const item = {
        value,
        timestamp: Date.now()
    }

    try {
        await AsyncStorage.setItem(prefix+key, JSON.stringify(item))
    } catch (error) {
        console.log(error)
    }
}


const get = async (key) => {

    const value = await AsyncStorage.getItem(prefix+key);

    const item = JSON.parse(value);

    if(!item) return null;

    if (checkExpiry(item.timestamp)) {
        await AsyncStorage.removeItem(prefix+key);
        return null
    }

    return item.value;
}


export default {
    store,
    get
}