import React, { useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import RedButton from "../components/RedButton"
import { AntDesign } from '@expo/vector-icons';

function Register(){

    const[details, setDetails]=useState({
        fullname:"",
        email:"",
        phoneNum:"",
        role:"",
        twitter:"",
        linkedIn:"",
    })

    const handleChange=(identity,text)=>{ 
        setDetails({...details, [identity]:text})
    }

   
    return(
        <View style={styles.container}>
            <View style={styles.profilePhoto}>
                <AntDesign name="user" size={54} color="#ff4d4d" />
                <Text style={styles.profileText}>ADD PROFILE PHOTO</Text>
            </View>
            <View style={styles.form}>
                <ScrollView>
                <View style={styles.inputRow}>
                    <Text>Full Name</Text>
                    <TextInput
                        name=""
                        placeholder="John West"
                        textAlign="right"
                        onChangeText={(text) => handleChange("fullName", text)}
                        value={details.fullName}
                     />
                </View>
                <View style={styles.inputRow}>
                    <Text>Email</Text>
                    <TextInput 
                        name=""
                        placeholder="johnWest@codetrain.com"
                        textAlign="right"
                        onChangeText={(text) => handleChange("email", text)}
                        value={details.email}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Phone Number</Text>
                    <TextInput 
                        name=""
                        placeholder="+233 290 9020 902"
                        textAlign="right"
                        onChangeText={(text) => handleChange("phoneNum", text)}
                        value={details.phoneNum}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Role</Text>
                    <TextInput 
                        name=""
                        placeholder="Director of Food Affairs"
                        textAlign="right"
                        onChangeText={(text) => handleChange("role", text)}
                        value={details.role}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Twitter</Text>
                    <TextInput 
                        name=""
                        placeholder="@johnWest"
                        textAlign="right"
                        onChangeText={(text) => handleChange("twitter", text)}
                        value={details.twitter}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>LinkedIn</Text>
                    <TextInput 
                        name=""
                        placeholder="johnWest@codetrain.com"
                        textAlign="right"
                        onChangeText={(text) => handleChange("linkedIn", text)}
                        value={details.linkedIn}
                    />
                </View>
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <RedButton text="REGISTER" />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:10,
    },
    profilePhoto:{
        flex:3,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#E8E8E8"
    },
    profileText:{
        color:"#ff4d4d",
        fontSize:16,
    },
    form:{
        flex:6,
        marginHorizontal:20,
        marginBottom:20,
    },
    inputRow:{
        width:"100%",
        height:60,
        flexDirection:"row",
        alignItems:"center",
        borderBottomColor:"#D8D8D8",
        borderBottomWidth:1,
        justifyContent:"space-between",
    },
    buttonContainer:{
        flex:1,
        marginHorizontal:20,
        justifyContent:"center",
        marginBottom:10,
    }
})

export default Register