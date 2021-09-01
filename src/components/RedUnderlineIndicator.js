import React from "react"
import { View,StyleSheet, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"


const RedUnderlineIndicator=({text,nav})=>{

    const navigation=useNavigation()

    return(
        <View style={styles.container}>
            <Text onPress={()=>navigation.navigate(nav)} style={styles.text}>{text}</Text>
            <View style={styles.horizontalLine}></View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:"center"
    },
    horizontalLine:{
        width:"100%",
        height:2,
        backgroundColor:"#e60000",
    },
    text:{
        fontSize:16,
    }
})


export default RedUnderlineIndicator