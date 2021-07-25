import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Card from '../components/Card'
import Screen from "../components/Screen"
import colors from '../config/colors'
import AppText from '../components/AppText/AppText'
import AppButton from '../components/AppButton'
import ActivityIndicator from "../components/ActivityIndicator"
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi"

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


export default function ListingsScreen({navigation}) {

    const { data:listings, loading, error, request:loadListings } = useApi(listingsApi.getListings)
    //// For getting Listings from Backend
    // const [listings, setListings] = useState();
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);

    // const loadListings =  async () => {

    //     setLoading(true);
    //     const response = await listingsApi.getListings();
    //     setLoading(false);

    //     if (!response.ok) return setError(true);
    //     // console.log(response)
    //     setError(false);
    //     setListings(response.data)
    // }

    useEffect(()=>{
        loadListings()
    },[])

    return (
        <Screen style={styles.screen}>
            {error && 
            <>
                <AppText>Couldn't reterive Listings, Please Check connection!</AppText>
                <AppButton title="Retry" onPress={loadListings} color="primary" />
            </>}
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
