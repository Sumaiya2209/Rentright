import { useRouter } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/logo1.png";

const FrontPage = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#222222]">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={logo}
          style={{ width: 260, height:200  }}
          resizeMode="contain"
        />

        <View className="w-full">
          <TouchableOpacity
            onPress={() => router.push("/signup")}
            className="bg-[#155e75] py-4 rounded-2xl mb-4"
            activeOpacity={0.8}
          >
            <Text className="text-white text-center text-lg font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(tabs)/home")}
            className="border-2 border-[#155e75] py-4 rounded-2xl"
            activeOpacity={0.8}
          >
            <Text className="text-[#155e75] text-center text-lg font-bold">
              Guest User
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center my-8 w-full">
          <View className="flex-1 h-[1px] bg-[#155e75]" />
          <Text className="text-white mx-3 font-semibold">OR</Text>
          <View className="flex-1 h-[1px] bg-[#155e75]" />
        </View>

        <TouchableOpacity
          className="flex-row"
          onPress={() => router.push("/signin")}
        >
          <Text className="text-white font-medium">
            Already have an account?{" "}
          </Text>

          <Text className="text-[#155e75] font-bold underline">
            Sign In
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FrontPage;