import React, { useEffect } from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const Front_page = ({ navigation }) => {

   useEffect(() => {
      const timer = setTimeout(() => {
         navigation.replace('SignUp'); // replace use korle back e fire asbe na
      }, 5000);

      return () => clearTimeout(timer); // cleanup
   }, []);
   
   return (
      <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('SignUp')}>
         <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
         />
         <Text style={styles.logoDetails}>Welcome to My App</Text>
      </TouchableOpacity>
   );
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#026272',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
   },
   logo: {
      width: 250,
      height: 250,
      borderRadius: 15,
   },
   logoDetails: {
      fontSize: 15,
      color: '#ffffff',
      marginTop: 10,
   }
});


export default Front_page; 



