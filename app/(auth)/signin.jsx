import { useRouter } from "expo-router";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/logo1.png";

const Signin = () => {

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
            Sign In Your Account
          </Text>
        </View>

        <View className="gap-5">
          <TextInput
            placeholder="Email"
            placeholderTextColor="#9ca3af"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            className="bg-[#2b2b2b] text-white px-4 py-3 rounded-xl"
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#9ca3af"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            className="bg-[#2b2b2b] text-white px-4 py-3 rounded-xl"
          />

          <TouchableOpacity
            onPress={handleSignIn}
            className="bg-[#155e75] py-3 rounded-xl mt-4"
          >
            <Text className="text-center text-white font-semibold text-lg">
              Sign in
            </Text>
          </TouchableOpacity>
          {error ? (
            <Text className="text-red-400 text-center mt-2">
              {error}
            </Text>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;