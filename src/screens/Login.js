import React,{useState} from "react"
import {KeyboardAvoidingView,ScrollView, Image, StyleSheet, Text, TextInput, View } from "react-native"
import RedButton from "../components/RedButton"
import RedUnderlineIndicator from "../components/RedUnderlineIndicator"


function Login(){

    const[details,setDetails]=useState({
        email:"",
        password:"",
    })

    const handleChange=(identity,text)=>{ 
        setDetails({...details, [identity]:text})
    }
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../assets/login.png")}/>
            </View>
            {/* <View style={styles.section2}> */}
            <ScrollView contentContainerStyle={{marginHorizontal:20}}>
                    <View style={styles.form}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Email</Text>
                            <TextInput
                                placeholder="johnWest@codetrain.com"
                                textAlign="right"
                                onChangeText={(text) => handleChange("email", text)}
                                value={details.email}
                            />
                        </View>
                        <View style={styles.horizontalLine}></View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Password</Text>
                            <TextInput
                                placeholder="password"
                                autoCapitalize="none"
                                textAlign="right"
                                secureTextEntry={true}
                                onChangeText={(text) => { handleChange('password', text) }}
                                value={details.password}
                            />
                        </View>
                    </View>
            </ScrollView>
                <View style={styles.buttonContainer}>
                    <RedButton />
                </View>
                <View style={styles.resetPasswordContainer}>
                    <Text  style={styles.text}>Forgot?</Text>
                    <RedUnderlineIndicator text="Reset Password"/>
                </View> 
                {/*     
               
               */}
               
            </KeyboardAvoidingView>
        // </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:10,
        backgroundColor:"#fff"
    },
    imageContainer:{
        flex:3,
        justifyContent:"flex-start",
    },
    image:{
        width:"100%",
        height:"100%",
    },
    // section2:{
    //     flex:5,
    //     marginHorizontal:20,
    // },
    form:{
        flex:3,
        justifyContent:"center",
    },
    inputContainer:{
        width:"100%",
        height:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        

    },
    horizontalLine:{
        width:"100%",
        height:1,
        backgroundColor:"#E0E0E0"
    },
    buttonContainer:{
        flex:1,
        justifyContent:"flex-end",    
    },
    resetPasswordContainer:{
        flex:3,
        flexDirection:"row",
    },
    text:{
        fontSize:16
    }
})

export default Login