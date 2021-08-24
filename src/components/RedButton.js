import React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"

function RedButton(){
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>SIGN IN</Text>
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