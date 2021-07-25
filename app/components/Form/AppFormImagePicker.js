import React from 'react'
import { useFormikContext } from "formik"

import ImageInputList from "../ImageInputList"
import ErrorMessage from "./ErrorMessage"


function AppFormImagePicker({name}) {
    
    const { setFieldValue, errors, values, touched } = useFormikContext();

    const imageUris = values[name]

    const onRemoveImageUri = (uri) => {
        setFieldValue(name, imageUris.filter( imageUri=> imageUri !== uri ))
      }
    
      const onAddImageUri = (uri) => {
        setFieldValue(name, [...imageUris, uri])
      }

    return (
        <>
            <ImageInputList imageUris={imageUris} onAddImageUri={onAddImageUri} onRemoveImageUri={onRemoveImageUri} />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormImagePicker
