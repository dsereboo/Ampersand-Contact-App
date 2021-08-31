import React,{useEffect} from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { connect } from "react-redux"


function IdCard({auth}){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/image.jpg")}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{auth.fullName}</Text>
                <Text style={styles.subText}>{auth.role}</Text>
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

const mapStateToProps=(state)=>{
    return{
        auth:state.userDetails
    }
}
export default connect(mapStateToProps, null)(IdCard)