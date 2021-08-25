import React from "react"
import { StyleSheet, Text, View } from "react-native"
import QrActionButton from "./QrActionButton"

function QrActionCard(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>Want to add a new connection?</Text>
                <QrActionButton />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{ 
        borderTopColor:"#d8d8d8",
        borderTopWidth:1,
    },
    content:{
        marginHorizontal:20,
        marginVertical:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    text:{
        fontSize:16,
        marginRight:20,
    }
})

export default QrActionCard