
import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import RedUnderlineIndicator from "../components/RedUnderlineIndicator"



function WelcomeGuide(){
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/welcome.png")} style={styles.image}/>
            </View>
            <View style={styles.section2}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>KEEP IN TOUCH WITH THE TEAM AT CODETRAIN</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>
                        Sign in or register with your Codetrain email
                    </Text>
                </View>
                <View style={styles.indicatorContainer}>
                    <RedUnderlineIndicator nav="Register" text="REGISTER" />
                    <RedUnderlineIndicator nav="Login" text="SIGN IN" />
                </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:10,
    },
    imageContainer:{
        flex:6,
        justifyContent:"center"
    },
    image:{
        width:"100%",
        height:"100%",
    },
    section2:{
        marginHorizontal:20,
        flex:4,
    },
    headerContainer:{
        flex:1.3,
        justifyContent:"center",
        alignItems:"center"
    },
    headerText:{
        fontSize:18,
    },
    descriptionContainer:{
        flex:1,
    },
    descriptionText:{
        fontSize:16,
        color:"#A8A8A8"
    },
    indicatorContainer:{
        flex:3,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }

})

export default WelcomeGuide