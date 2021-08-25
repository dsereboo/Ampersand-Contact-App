import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import WelcomeGuide from "../screens/WelcomeGuide";
import WelcomeHome from "../screens/WelcomeHome";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import ProfileIcon from "../components/ProfileIcon";





const Stack= createStackNavigator()

function ApplicationContainer(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="WelcomeHome"
            >
                <Stack.Screen
                    name="WelcomeHome"
                    component={WelcomeHome}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="WelcomeGuide"
                    component={WelcomeGuide}
                    options={{
                        headerTransparent:true,
                        title:"",
                        headerTintColor:"#fff"
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title:"Sign In",
                        headerTintColor:"#fff",
                        headerStyle:{
                            backgroundColor:"#ff4d4d"
                        }
                    }}
                />
                 <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        title:"Register",
                        headerTintColor:"#fff",
                        headerStyle:{
                            backgroundColor:"#ff4d4d"
                        }
                    }}
                />
                 <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title:"Codetrain",
                        headerTintColor:"#fff",
                        headerStyle:{
                            backgroundColor:"#ff4d4d"
                        },
                        headerRight:()=>{
                            return(<ProfileIcon/>)
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationContainer