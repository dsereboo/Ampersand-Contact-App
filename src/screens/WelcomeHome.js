import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import RedUnderlineIndicator from "../components/RedUnderlineIndicator"


function WelcomeHome(){
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../assets/codetrain.png")}/>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>CODETRAIN</Text>
                <Text style={styles.title}>CONTACTS</Text>
            </View>
            <View style={styles.indicator}>
                <RedUnderlineIndicator nav="WelcomeGuide" text="GET STARTED"/>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:10,
        backgroundColor:"#C8C8C8",
        justifyContent:"center",
        alignItems:"center",
    },
    imageContainer:{
        flex:5,
        justifyContent:"center",
    },
    titleContainer:{
        flex:3,
        alignItems:"center"
    },
    image:{
        width:225,
        height:43,
    },
    indicator:{
        flex:2,
    },
    title:{
        fontSize:20,
    }

})

export default WelcomeHome