import React, { useState } from "react"
import * as ImagePicker from 'expo-image-picker';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import RedButton from "../components/RedButton"
import { AntDesign } from '@expo/vector-icons';

function Register(){
    
    const [image,setImage]=useState(null)
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
            setImage(pickerResult.uri);
          }
      }

      console.log(image)

   
    return(
        <View style={styles.container}>
             {/* <ScrollView> */}     
            {image?
                <View style={styles.profilePhotoLoaded}>
                    <Image style={styles.image} source={{uri:image}} />
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
    },
    image:{
        width:"100%",
        height:"100%",
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