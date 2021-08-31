import React from "react"
import { StyleSheet, Text, TouchableOpacity, } from "react-native"

function EditPicture({onPress}){
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>EDIT PROFILE PHOTO</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        borderWidth:3,
        borderColor:"#fff",
        position:"absolute",
        top:70,
        left:90,
        right:90,
        zIndex:1200,
    },
    text:{
        color:"#fff",
        fontSize:16,
        padding:5,
    },
})
export default EditPicture