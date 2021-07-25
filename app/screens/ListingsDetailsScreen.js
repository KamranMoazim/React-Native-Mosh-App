import React from 'react'
import { StyleSheet, View } from 'react-native'
// import { Image } from 'react-native'
import {Image} from "react-native-expo-image-cache"

import AppText from '../components/AppText/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

const ListingsDetailsScreen = ({route}) => {

    const listing = route.params;
    // console.log(listing) uri={{uri:listing.images[0].url}}

    return (
        <View>
            {/* <Image style={styles.image} source={{uri:listing.images[0].url}} /> */}
            <Image style={styles.image} preview={{uri:listing.images[0].thumbnailUrl}} tint="light" uri={listing.images[0].url} />
            {/* <Image style={styles.image} source={require("../assets/jacket.jpg")} /> */}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                {/* <AppText style={styles.title}>Red Jacket for Sale</AppText> */}
                <AppText style={styles.price} >${listing.price}</AppText>
                {/* <AppText style={styles.price} >$100</AppText> */}
            </View>
            <View style={styles.userContainer}>
                <ListItem 
                    title="Mosh Hamedani"
                    subTitle="5 Listings"
                    image={require("../assets/mosh.jpg")}
                />
            </View>
        </View>
    )

}

export default ListingsDetailsScreen;

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300,
        
    },
    detailsContainer:{
        padding:20,
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
    },
    price:{
        color:colors.secondary,
        fontSize:20,
        fontWeight:"bold",
        marginTop:5
    },
    userContainer:{
        marginVertical:40,
    }
})
