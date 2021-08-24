import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import WelcomeGuide from "../screens/WelcomeGuide";
import WelcomeHome from "../screens/WelcomeHome";
import Login from "../screens/Login";


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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationContainer