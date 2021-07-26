import client from "./client"


const getCategories = () => {
    return client.get("/categories")
}

//messages
export default {
    getCategories
}