import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

const SignIn = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = () => {
      console.log("Email:", email);
      console.log("Password:", password);
   };

   return (
      <View style={styles.container}>

         <View style={styles.formContainer}>
            <Text style={styles.title}>Sign In</Text>

            <TextInput
               style={styles.input}
               placeholder="Enter Email"
               placeholderTextColor="#aaa"
               value={email}
               onChangeText={setEmail}
            />

            <TextInput
               style={styles.input}
               placeholder="Enter Password"
               placeholderTextColor="#aaa"
               secureTextEntry
               value={password}
               onChangeText={setPassword}
               borderRadius={20}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
               <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
         </View>

      </View>
   );
};

const styles = StyleSheet.create({
   formContainer: {
      width: "95%",
      height: "40%",
      alignSelf: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 20,
   },
   container: {
      flex: 1,
      backgroundColor: "#026272",
      justifyContent: "center",
      padding: 20,
   },
   title: {
      fontSize: 26,
      fontWeight: "bold",
      color: "#222",
      marginBottom: 25,
      textAlign: "center",
   },
   input: {
      color: "#333",
      backgroundColor: "#f1f0f0",
      padding: 12,
      borderRadius: 20,
      marginBottom: 15,
   },
   button: {
      borderRadius: 20,
      backgroundColor: "#0F4C5C",
      padding: 15,
      borderRadius: 25,
      alignItems: "center",
   },
   buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
   },
});

export default SignIn;


