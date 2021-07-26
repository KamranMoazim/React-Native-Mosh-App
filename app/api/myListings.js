import client from "./client";


const endpoint = "/my/listings";


const getListings = (user) => client.get(endpoint, user);




export default {
    getListings
}