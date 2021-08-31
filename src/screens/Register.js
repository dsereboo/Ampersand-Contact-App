import React, { useState } from "react"
import * as ImagePicker from 'expo-image-picker';
import { ImageBackground,ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import RedButton from "../components/RedButton"
import { AntDesign } from '@expo/vector-icons';
import { connect } from "react-redux";
import { createEmailAccount } from "../redux/actions/authActions";
import EditPicture from "../components/EditPicture";



function Register({signUp}){
    
    const [codetrain, setCodetrain]=useState({
        fullName:"",
        phoneNum:"",
        role:"",
        twitter:"",
        linkedIn:"",
        image:null,
    })
    const [details, setDetails]=useState({
        email:"",
        password:"",
    })

    const handleChange=(identity,text)=>{ 
        setDetails({...details, [identity]:text})
    }

    const handleChangeCodetrain=(identity,text)=>{ 
        setCodetrain({...codetrain, [identity]:text})
    }

    const handleSubmit=()=>{
        signUp(details.email, details.password, codetrain)
    }
    
    const newImage=()=>{
        setCodetrain({...codetrain, image:null})
        openImagePickerAsync()
        console.log("open")
    }

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!pickerResult.cancelled) {
            setCodetrain({...codetrain, image:pickerResult.uri});
          }
      }
      console.log(codetrain)

    
    return(
        <View style={styles.container}>
             {/* <ScrollView> */}     
            {codetrain.image?
                <View style={styles.profilePhotoLoaded}>
                        
                    <ImageBackground style={styles.image} source={{uri:codetrain.image}}>
                         <EditPicture onPress={()=>{openImagePickerAsync()}} />
                    </ImageBackground>
                </View>
                :
                <TouchableOpacity onPress={openImagePickerAsync} style={styles.profilePhoto}>
                    <AntDesign name="user" size={54} color="#ff4d4d" />
                    <Text style={styles.profileText}>ADD PROFILE PHOTO</Text>
                </TouchableOpacity>
                
            }
            {/* <TouchableOpacity onPress={openImagePickerAsync} style={styles.profilePhoto}>
                <AntDesign  name="user" size={54} color="#ff4d4d" />
                <Text style={styles.profileText}>ADD PROFILE PHOTO</Text>
            </TouchableOpacity> */}
            <View style={styles.form}>
               <ScrollView>
                <View style={styles.inputRow}>
                    <Text>Full Name</Text>
                    <TextInput
                        name=""
                        placeholder="John West"
                        textAlign="right"
                        onChangeText={(text) => handleChangeCodetrain("fullName", text)}
                        value={codetrain.fullName}
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
                        onChangeText={(text) => handleChangeCodetrain("phoneNum", text)}
                        value={codetrain.phoneNum}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Role</Text>
                    <TextInput 
                        name=""
                        placeholder="Director of Food Affairs"
                        textAlign="right"
                        onChangeText={(text) => handleChangeCodetrain("role", text)}
                        value={codetrain.role}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Twitter</Text>
                    <TextInput 
                        name=""
                        placeholder="@johnWest"
                        textAlign="right"
                        onChangeText={(text) => handleChangeCodetrain("twitter", text)}
                        value={codetrain.twitter}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>LinkedIn</Text>
                    <TextInput 
                        name=""
                        placeholder="johnWest@codetrain.com"
                        textAlign="right"
                        onChangeText={(text) => handleChangeCodetrain("linkedIn", text)}
                        value={codetrain.linkedIn}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Password</Text>
                    <TextInput 
                        secureTextEntry={true}
                        placeholder="johnWest@codetrain.com"
                        textAlign="right"
                        onChangeText={(text) => handleChange("password", text)}
                        value={details.password}
                    />
                </View>
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <RedButton 
                     text="REGISTER"
                     onPress={handleSubmit}
                 />
            </View>
            {/* </ScrollView> */}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:10,
    },
    profilePhoto:{
        flex:3,
        // height:180,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#E8E8E8"
    },
    profilePhotoLoaded:{
        flex:3,
        backgroundColor: 'rgba(0, 0, 0, 1.0)'
    },
    image:{
        width:"100%",
        height:"100%",
        opacity:0.6
        // shadowOpacity:3,
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

const mapDispatchToProps={
    signUp: createEmailAccount,
}

export default connect(null,mapDispatchToProps)(Register)