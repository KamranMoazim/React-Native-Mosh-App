import {useContext} from 'react'
import jwtDecode from "jwt-decode"

import AuthContext from '../auth/AuthContext'
import authStorage from "../auth/storage"


export default useAuth = () => {

    const {user, setUser} = useContext(AuthContext);

    const Logout = () => {
        setUser(null);
        authStorage.removeToken();
    }


    const Login = (token) => {
        // const user = jwtDecode(response.data)
        // setUser(user)
        // authStorage.storeToken(response.data);
        setUser(jwtDecode(token))
        authStorage.storeToken(token);
    }


    return {
        user,
        Logout,
        Login
    }

}
