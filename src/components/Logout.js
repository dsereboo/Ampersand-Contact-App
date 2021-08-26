import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import { logout } from "../redux/actions/authActions"



function Logout({logout}){

    const handleLogOut=()=>{
        logout()
    }

    return(
        <TouchableOpacity onPress={handleLogOut}>
            <Text style={styles.text} >
                Logout
            </Text>
        </TouchableOpacity>
      
    )
}

const styles= StyleSheet.create({
    text:{
        fontSize:18,
        fontWeight:"bold",
        color:"#fff",
        marginRight:20,
    }
})

const mapDispatchToProps={
   logout:logout,
}

export default connect(null, mapDispatchToProps)(Logout)