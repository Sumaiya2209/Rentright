import React from "react";
import {Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Front_page from "./Screens/Front_page";
import SignIn from "./Screens/Sign_in";
import SignUp from "./Screens/Sign_up";


const Stack = createNativeStackNavigator();

export default App = () => { 
  return (
    <NavigationContainer> 
    <Stack.Navigator /* screenOptions={{ headerShown: false }} */> 
    <Stack.Screen name="FrontPage" component = { Front_page } /> 
    <Stack.Screen name="SignIn" component = { SignIn } /> 
    <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator> 
    </NavigationContainer>
  );
 };


