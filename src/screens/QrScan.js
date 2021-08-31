import React,{useEffect, useState} from "react"
import { StyleSheet, Text, TouchableOpacity, View,Alert } from "react-native"
import { BarCodeScanner } from 'expo-barcode-scanner';
import QrActionCard from "../components/QrActionCard";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Camera } from 'expo-camera';



function QrScan(){

    const [hasPermission, setHasPermission] = useState(null);
    const [flash, setFlash]=useState(Camera.Constants.FlashMode)
    const [scanned, setScanned] = useState(false);
    const navigation=useNavigation()

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        navigation.navigate("MemberProfile")
        // handleShow({type,data})
      };
     
    // const handleShow=({ type, data })=>{
    //     Alert.alert(
    //         "",
    //         `Bar code with type ${type} and data ${data} has been scanned!`,
    //         [  {
    //             text: 'Cancel',
    //             onPress: () => setScanned(false),
    //             style: 'cancel'
    //           },],
    //     );
       
    // }
    
    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    
    return(
        <View style={styles.container}>
                <TouchableOpacity style={styles.flash} onPress={()=>{setFlash(2)}}>
                    <Entypo  name="flash" size={30} color="#d8d8d8" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancel}  onPress={()=>{navigation.navigate("Home")}}>
                    <Feather name="x" size={30} color="#fff" />
                </TouchableOpacity>      
            <View style={styles.instruction}>
                <Text style={styles.text}>Place QR Code within frame</Text>
            </View>
            <BarCodeScanner 
                style={styles.wrapper}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                torchMode={flash}
            />
            <View style={styles.actionCard}>
                <QrActionCard/>
            </View>
           
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:10,   
    },
    actionRow:{
        position:"absolute",
        zIndex:1120,
        // flexDirection:"row",
        // justifyContent:"space-between",
    },
    flash:{
        position:"absolute",
        zIndex:1120,
        top:60,
        left:20,
    },
    cancel:{
        position:"absolute",
        zIndex:1120,
        top:60,
        left:300, 
    },
    wrapper:{
        ...StyleSheet.absoluteFillObject,
        top:0,
        bottom:40,
        // top:0,
        // bottom:0,
        // left:0,
        // right:0,
        // height:100,
        // width:100,
      
    },
    actionCard:{
        flex:1,
        justifyContent:"flex-end"
    },
    instruction:{
        flex:2,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    text:{
        color:"#fff",
        fontSize:16,
        zIndex:1120,
    }
    
})

export default QrScan