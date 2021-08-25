import React from "react"
import { StyleSheet, Text, TouchableOpacity} from "react-native"

function QrActionButton(){
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>Scan QR</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        height:40,
        width:90,
        borderColor:"#ff4d4d",
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        color:"#ff4d4d"
    },
})

export default QrActionButton