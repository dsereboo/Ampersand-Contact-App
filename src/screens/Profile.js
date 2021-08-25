import React from "react"
import { StyleSheet, Text, View } from "react-native"
import IdCard from "../components/IdCard"
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

function Profile (){
    return(
        <View style={styles.container}>
            <View style={styles.idContainer}>
                <IdCard/>
            </View>
            <View style={styles.socialIcons}>
                <View style={styles.iconRow}>
                    <Entypo name="linkedin-with-circle" size={40} color="#686868" />
                    <Entypo style={styles.icon} name="twitter-with-circle" size={40} color="#686868" />
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.detail}>
                    <Feather name="phone" size={26} color="black" />
                    <Text style={styles.text}>+233 (295) 234 423</Text>
                </View>
                <View style={styles.detail}>
                    <MaterialCommunityIcons name="email-outline" size={26} color="black" />
                    <Text style={styles.text}>johnWest@codetrain.com</Text>
                </View>
                <View style={styles.detail}>
                    <SimpleLineIcons name="location-pin" size={26} color="black" />
                    <Text style={styles.text}>Accra, Ghana</Text>
                </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:10,
        marginHorizontal:20,
    },
    idContainer:{
        flex:1.5,
        justifyContent:"flex-end"
    },
    socialIcons:{
        flex:1.5,
        justifyContent:"center"
    },
    iconRow:{
        flexDirection:"row",
    },
    icon:{
        marginLeft:10,
    },
    detailsContainer:{
        flex:7
    },
    detail:{
        flexDirection:"row",
        flex:0.1,
    },
    text:{
        marginLeft:20,
    }
})

export default Profile