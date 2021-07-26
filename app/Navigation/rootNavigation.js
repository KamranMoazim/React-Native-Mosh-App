import { createRef } from 'react'

export const navigationRef = createRef();

const navigate = (name, params) => {
    // if (navigationRef.current) {
    //     navigationRef.current.navigate(name, params)
    // }
    navigationRef.current?.navigate(name, params)   // above statement in short form
}

export default {
    navigate
}