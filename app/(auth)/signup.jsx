/* import { useRouter } from "expo-router";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/logo1.png";
import { Formik } from "formik";

const Signup = () => {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = () => {
    if (!email) {
      setError("Please enter your email to sign in.");
      return;
    }
    else if (!password) {
      setError("Please enter your password to sign in.");
      return;
    }
    else {
      setError("");
      router.push("../(tabs)/home.jsx")
    }

  };

  return (
    <SafeAreaView className="flex-1 bg-[#222222]">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center mb-8">
          <Image
            source={logo}
            style={{ width: 260, height: 100 }}
            resizeMode="contain"
          />
          <Text className="text-white text-2xl font-bold mt-2">
            Create Account
          </Text>
          <Text className="text-gray-400 text-sm mt-1">
            Sign up to get started
          </Text>
        </View>


        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSignin}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View className="gap-5">
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="#9ca3af"
                className="bg-[#2b2b2b] text-white px-4 py-3 rounded-xl"
              />

              <TextInput
                placeholder="Email"
                placeholderTextColor="#9ca3af"
                keyboardType="email-address"
                className="bg-[#2b2b2b] text-white px-4 py-3 rounded-xl"
              />

              <TextInput
                placeholder="Password"
                placeholderTextColor="#9ca3af"
                secureTextEntry
                className="bg-[#2b2b2b] text-white px-4 py-3 rounded-xl"
              />

              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#9ca3af"
                secureTextEntry
                className="bg-[#2b2b2b] text-white px-4 py-3 rounded-xl"
              />
            </View>)}
        </Formik>

        <TouchableOpacity onPress={handleSignIn} className="bg-[#155e75] py-3 rounded-xl mt-4">
          <Text className="text-center text-white font-semibold text-lg">
            Sign Up
          </Text>
        </TouchableOpacity>

        {error ? (
          <Text className="text-red-400 text-center mt-2">
            {error}
          </Text>
        ) : null}



      </ScrollView>
    </SafeAreaView>
    );
  };

export default Signup; */


import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { authClient } from "@/lib/auth-client";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        await authClient.signUp.email({
                email,
                password,
                name
        })
    };

    return (
        <View>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
}