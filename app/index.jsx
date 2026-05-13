import React, { useEffect } from "react";
import { ActivityIndicator, Image, StatusBar, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const index = () => {

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("./handleUsers");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (

    <LinearGradient
      colors={["#0f172a", "#082f49", "#155e75"]}
      className="flex-1 "
    >

      <StatusBar barStyle="light-content" />

      <View className="flex-1 items-center justify-center px-6">

        <View className="bg-white/10 border border-cyan-300/20 rounded-full p-5 shadow-2xl mb-8">

          <Image
            source={require("../assets/images/home-rent-icon2.jpg")}
            className="w-32 h-32 rounded-full"
            resizeMode="cover"
          />

        </View>

        <Text className="text-white text-5xl font-extrabold tracking-[4px]">
          RentRight
        </Text>

        <Text className="text-center text-cyan-100 text-base mt-5 leading-7 px-6">
          Smart Digital Rental Platform{"\n"}
          Rent Anything, Anytime, Anywhere
        </Text>
        <ActivityIndicator size="large" color="#22d3ee" style={{ marginTop: 20 }} />
      </View>


      <View className="absolute bottom-12 self-center">
        <Text className="text-cyan-200 text-sm tracking-widest text-center ">
          POWERED BY DIGITAL RENT SOLUTION
        </Text>
      </View>
    </LinearGradient>
  );
};

export default index;