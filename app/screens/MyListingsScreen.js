import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, Alert } from 'react-native'

import Card from '../components/Card'
import Screen from "../components/Screen"
import colors from '../config/colors'
import AppText from '../components/AppText/AppText'
import AppButton from '../components/AppButton'
import ActivityIndicator from "../components/ActivityIndicator"
import myListingsApi from "../api/myListings";
import useAuth from "../auth/useAuth"

// const listings = [
//     {
//         id:1,
//         title:"Red Jacket for Sale",
//         price:200,
//         image:require("../assets/jacket.jpg")
//     },
//     {
//         id:2,
//         title:"Couch in better Condition",
//         price:1400,
//         image:require("../assets/couch.jpg")
//     }
// ]





export default function MyListingsScreen({navigation}) {


    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [messageToDisplay, setMessageToDisplay] = useState(false);

    const { user } = useAuth()


    const getMyListingsFromDb = async () => {   // ,{resetForm}
        const result = await myListingsApi.getListings(user)
        if (!result.ok) {
            console.log("Error", result)
            setMessageToDisplay("Couldn't reterive Your Listings, Please Check connection!")
            setLoading(false)
            setError(true)
            return Alert.alert("Error", "Could not get your Listings from Server.")
        } else {
            // console.log(result.data)
            if(!result.data.length) {
                setMessageToDisplay("You have no Listings to show. Please add your listings.")
                setLoading(false)
                return setListings([]) 
            }
            setLoading(false)
            setListings(result.data)
        }
    }

    useEffect(()=>{
        setLoading(true)
        getMyListingsFromDb()
    },[])

    return (
        <Screen style={styles.screen}>
            {error && 
            <>
                <AppText> {messageToDisplay} </AppText>
                <AppButton title="Retry" onPress={getMyListingsFromDb} color="primary" />
            </>}
            {listings.length===0?<AppText> {messageToDisplay} </AppText>:null}
            <ActivityIndicator visible={loading} />
            <FlatList
                data={listings}
                keyExtractor={listing=>listing.id.toString()}
                renderItem={({item})=>{
                    return <Card 
                        title={item.title}
                        subTitle={`$${item.price}`}
                        // image={item.image}
                        imageUrl={item.images[0].url}
                        onPress={()=>navigation.navigate("ListingDetails", item)}
                        thumbnailUrl={item.images[0].thumbnailUrl}
                    />
                }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen:{
        padding:10,
        backgroundColor:colors.light,
    }
})
