import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import IdCard from "../components/IdCard"
import QrActionCard from "../components/QrActionCard"

function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Exchange Contact Information</Text>
                <Text style={styles.subText}>Scan this QR below to share your contacts</Text>
            </View>
            <View style={styles.qrImage}> 
                <Image style={styles.image} source={require("../../assets/qr.jpg")}/>
            </View>
            <View style={styles.idContainer}>
                <IdCard/>
            </View>
            <View style={styles.actionContainer}>
                <QrActionCard/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:10,
        backgroundColor:"#fff",
    },
    headerContainer:{
        flex:2,
        justifyContent:"flex-end",
        marginHorizontal:50,
    },
    header:{
        fontSize:18,
    },
    subText:{
        color:"#C8C8C8",
        fontSize:16,
    },
    qrImage:{
        flex:5,
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        width:280,
        height:280,
    },
    idContainer:{
        flex:2,
        marginHorizontal:50,
    },
    actionContainer:{
        flex:1,
        
    },

})

export default Home