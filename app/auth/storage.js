import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode"


const key = "authToken";


const storeToken = async (token) => {
    try {
        await SecureStore.setItemAsync(key, token)
    } catch (error) {
        console.log("Error while storing auth", error)
    }
}


const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key)
    } catch (error) {
        console.log("Error while getting auth", error)
    }
}
const getUser = async () => {

    const token = await getToken();
    return token ? jwtDecode(token) : null;
}


const removeToken = async () => {
    try {
        return await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log("Error while removing auth", error)
    }
}


export default {
    storeToken, 
    getToken,
    removeToken,
    getUser
}