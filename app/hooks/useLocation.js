import {useState, useEffect} from "react"
import * as Location from "expo-location"


export default function useLocation() {

    const [location, setLocation] = useState({});
  
    const requestPermission = async () => {
        try {            
  
            const {granted} = await Location.requestForegroundPermissionsAsync();
            // console.log(status)
            if (granted) {
                const { coords } = await Location.getCurrentPositionAsync();
                // console.log(coords)
                // console.log(location)
                setLocation({
                    longtitude:coords.longitude,
                    latitude:coords.latitude,
                })
            };
            return location
  
        } catch (error) {
            console.log(error)
        }
      }
  
      useEffect( ()=>{
        requestPermission()
      },[])

    return
}
