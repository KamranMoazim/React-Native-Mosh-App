import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from "yup"
// import * as Location from "expo-location"


import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton, AppFormPicker, AppFormImagePicker } from "../components/Form";
import CategoryPickerItem from "../components/CategoryPickerItem";
import useLocation from '../hooks/useLocation';
import listingsApi from "../api/listings";
import UploadScreen from './UploadScreen';
import categoriesApi from "../api/categories";
// import useApi from "../hooks/useApi"


const defaultCategories = [
    {
      backgroundColor: "#fc5c65",
      icon: "floor-lamp",
      label: "Furniture",
      value: 1,
    },
    {
      backgroundColor: "#fd9644",
      icon: "car",
      label: "Cars",
      value: 2,
    },
    {
      backgroundColor: "#fed330",
      icon: "camera",
      label: "Cameras",
      value: 3,
    },
    {
      backgroundColor: "#26de81",
      icon: "cards",
      label: "Games",
      value: 4,
    },
    {
      backgroundColor: "#2bcbba",
      icon: "shoe-heel",
      label: "Clothing",
      value: 5,
    },
    {
      backgroundColor: "#45aaf2",
      icon: "basketball",
      label: "Sports",
      value: 6,
    },
    {
      backgroundColor: "#4b7bec",
      icon: "headphones",
      label: "Movies & Music",
      value: 7,
    },
    {
      backgroundColor: "#a55eea",
      icon: "book-open-variant",
      label: "Books",
      value: 8,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Other",
      value: 9,
    },
  ];
  

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image."),
  });
  

export default function ListingEditScreen() {


  // const { data:categories, loading, error, request:loadCategories } = useApi(categoriesApi.getCategories)
  const [categories, setCategories] = useState([])

    const getCategories = async () => {   // ,{resetForm}
        const result = await categoriesApi.getCategories()
        if (!result.ok) {
            console.log("Error", result)
            setCategories(defaultCategories)
            // return Alert.alert("Error", "Could not get message from Server.")
        } else {
            // console.log(result.data)
            setCategories(result.data)
        }
    }

    useEffect(()=>{
      // getCategories()
      setCategories(defaultCategories)
    },[])

// console.log(categories)

  const [uploadScreenVisible, setUploadScreenVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const location = useLocation();
  
  const handleSubmit = async (listing, formikBag) => {
    setUploadScreenVisible(true)
    const result = await listingsApi.addListing(
      {...listing, location},
      (progresss) => setProgress(progresss)
    )
    
    if (!result.ok) {
      setUploadScreenVisible(false)
      return alert("Could not save the listing.")
    }
    // alert("Success")
    // formikBag.resetForm();
  }

    return (
        <Screen style={styles.container}>

          <UploadScreen 
            progress={progress} 
            visible={uploadScreenVisible} 
            onDone={()=>setUploadScreenVisible(false)}
          />

            <AppForm 
                initialValues={{ title:"", price:"", description:"", category: null, images:[] }}
                onSubmit={(values)=>handleSubmit(values)}  
                validationSchema={validationSchema}
            >
                <AppFormImagePicker 
                    name="images"
                />

                <AppFormField 
                    placeholder="Title"
                    maxLength={255}
                    name="title"
                />
                <AppFormField 
                    placeholder="Price"
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                />
                <AppFormPicker 
                    placeholder="Category"
                    PickerItemComponent={CategoryPickerItem}
                    items={categories}
                    name="category"
                />
                <AppFormField 
                    placeholder="Description"
                    maxLength={255}
                    name="description"
                    multiline
                    numberOfLines={3}
                />
                <SubmitButton title="Post" color="primary" />
            </AppForm>

        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    logo:{
        height:80,
        width:80,
        marginTop:50,
        marginBottom:20,
        alignSelf:"center"
    }
})


