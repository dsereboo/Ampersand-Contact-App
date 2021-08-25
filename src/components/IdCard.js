import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

function IdCard(){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/image.jpg")}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Joan Shay</Text>
                <Text style={styles.subText}>Head of Marketing</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
    },
    textContainer:{
        marginLeft:15,
    },
    image:{
        width:50,
        height:50,
        borderRadius:50,
    },
    title:{
        fontSize:16,
    },
    subText:{
        color:"#C8C8C8",
        fontSize:16,
    }
})

export default IdCard