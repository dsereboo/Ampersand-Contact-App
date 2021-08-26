import React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"

function RedButton({text, onPress}){

    const navigation=useNavigation()

    return(
        <TouchableOpacity style={styles.container}  onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#ff4d4d",
        justifyContent:"center",
        alignItems:"center",
        height:50,

    },
    text:{
        color:"#fff",
        fontSize:18,
    }
})

export default RedButton