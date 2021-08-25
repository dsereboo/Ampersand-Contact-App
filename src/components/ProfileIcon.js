import React from "react"
import { StyleSheet, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';

function ProfileIcon(){
    return(
        <View style={styles.container}>
             <AntDesign onPress={()=>{console.log("Clicked")}} name="user" size={24} color="#fff" />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginRight:20,
    }
})

export default ProfileIcon