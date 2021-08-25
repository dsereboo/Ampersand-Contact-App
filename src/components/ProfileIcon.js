import React from "react"
import { StyleSheet, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


function ProfileIcon(){

    const navigation= useNavigation()
    return(
        <View style={styles.container}>
             <AntDesign onPress={()=>{navigation.navigate("Profile")}} name="user" size={24} color="#fff" />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginRight:20,
    }
})

export default ProfileIcon