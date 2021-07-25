import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import * as Progress from "react-native-progress"
import LottieView from "lottie-react-native";

import colors from '../config/colors'

// import AppText from '../components/AppText/AppText'

export default function UploadScreen({onDone, progress=0, visible=false}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {/* <AppText>{progress*100}%</AppText> */}
                {progress < 1 ? 
                <Progress.Bar color={colors.primary} progress={progress} width={200} /> :
                <LottieView 
                    source={require("../assets/animations/done.json")} 
                    loop={false} 
                    autoPlay={true} 
                    onAnimationFinish={onDone}
                    style={styles.animation} 
                />
                }
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    animation: {
        width: 150,
      },
})
