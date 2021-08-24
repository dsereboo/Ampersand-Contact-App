import React from "react"
import { View,StyleSheet, Text } from "react-native"


const RedUnderlineIndicator=({text})=>{
    return(
        <View>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.horizontalLine}></View>
        </View>
    )
}

const styles=StyleSheet.create({
    horizontalLine:{
        width:100,
        height:2,
        backgroundColor:"#e60000",
    },
    text:{
        fontSize:16,
    }
})


export default RedUnderlineIndicator