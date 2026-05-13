import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle = {{height: "100%"}}>
        <Text className = "text-3xl font-bold">Home Screen</Text>

      </ScrollView>
    </SafeAreaView>
  )
}

export default index