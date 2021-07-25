import React, { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native';

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
    {
        id:1,
        message:"Kamran Moazim",
        description:"What are you doing right now??? What are you doing right now??? What are you doing right now???",
        image:require("../assets/mosh.jpg")
    },
    {
        id:2,
        message:"Usama Afzal",
        description:"What are you doing right now???",
        image:require("../assets/mosh.jpg")
    },
    {
        id:3,
        message:"Taimoor Ahmad",
        description:"What are you doing right now???",
        image:require("../assets/mosh.jpg")
    },
    {
        id:4,
        message:"Usman Janjua",
        description:"What are you doing right now???",
        image:require("../assets/mosh.jpg")
    }
]

export default function MessagesScreen() {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (messageId) => {
        setMessages(messages.filter((message)=>message.id !== messageId));
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item})=>{
                    return <ListItem 
                                title={item.message}
                                subTitle={item.description}
                                image={item.image}
                                onPress={()=>console.log("Pressed ", item)}
                                // renderRightActions={ListItemDeleteAction}
                                renderRightActions={()=> {
                                    return <ListItemDeleteAction onPress={()=>handleDelete(item.id)} />
                                }} 
                                />
                }}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={()=>{
                    setMessages(initialMessages)
                }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({

})
