import client from "./client"

const send = (message, listingId) => {
    return client.post("/messages",{
        message,
        listingId
    })
}


const getMessages = (userId) => {
    return client.get("/messages",{
        userId
    })
}

//messages
export default {
    send,
    getMessages
}