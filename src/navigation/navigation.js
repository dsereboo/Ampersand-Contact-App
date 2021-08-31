import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";



import WelcomeGuide from "../screens/WelcomeGuide";
import WelcomeHome from "../screens/WelcomeHome";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import ProfileIcon from "../components/ProfileIcon";
import Profile from "../screens/Profile";
import Logout from "../components/Logout";
import QrScan from "../screens/QrScan";
import MemberProfile from "../screens/MemberProfile";











const Stack= createStackNavigator()

function ApplicationContainer({auth}){
    return(
        <NavigationContainer>
            {((auth.login&& auth.userDetails) ?
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            title: "Codetrain",
                            headerTintColor: "#fff",
                            headerStyle: {
                                backgroundColor: "#ff4d4d"
                            },
                            headerTitleAlign: "center",
                            headerRight: () => {
                                return (<ProfileIcon />)
                            }
                        }}
                    />
                    <Stack.Screen
                        name="QrScan"
                        component={QrScan}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            title: "My Profile",
                            headerTintColor: "#fff",
                            headerStyle: {
                                backgroundColor: "#ff4d4d",

                            },
                            headerTitleAlign: "center",
                            headerRight:()=>{
                                return(<Logout/>)
                            }
                        }}
                    />
                     <Stack.Screen
                        name="MemberProfile"
                        component={MemberProfile}
                        options={{
                            title: "Member Profile",
                            headerTintColor: "#fff",
                            headerStyle: {
                                backgroundColor: "#ff4d4d",

                            },
                            headerTitleAlign: "center",
                        }}
                    />
                </Stack.Navigator>
                :
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
                            headerTransparent: true,
                            title: "",
                            headerTintColor: "#fff"
                        }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            title: "Sign In",
                            headerTintColor: "#fff",
                            headerStyle: {
                                backgroundColor: "#ff4d4d"
                            }
                        }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{
                            title: "Register",
                            headerTintColor: "#fff",
                            headerStyle: {
                                backgroundColor: "#ff4d4d"
                            }
                        }}
                    />
                </Stack.Navigator>
            )
            }
        </NavigationContainer>
    )
}

const mapStateToProps=(state)=>{
    return{auth:state}
}

export default connect(mapStateToProps,null)(ApplicationContainer)