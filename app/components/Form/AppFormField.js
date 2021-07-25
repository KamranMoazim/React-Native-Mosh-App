import React from 'react'
import { StyleSheet } from 'react-native'
import { useFormikContext } from "formik"

import AppTextInput from "../AppTextInput"
import ErrorMessage from "./ErrorMessage"

export default function AppFormField({name, ...otherProps}) {

    const {handleChange, setFieldValue, setFieldTouched, touched, errors, values} = useFormikContext();

    return (
        <>
            <AppTextInput 
                // autoCapitalize="none"
                // autoCorrect={false}
                // icon="email"
                // keyboardType="email-address"
                // placeholder="Email"
                // textContentType="emailAddress"  // works only in iOS
                // onChangeText={(text)=>setEmail(text)}
                {...otherProps}  // instead of above fields we used this ...otherProps
                onChangeText={text=>setFieldValue(name, text)}
                value={values[name]}
                onBlur={()=>{setFieldTouched(name)}}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

const styles = StyleSheet.create({})
