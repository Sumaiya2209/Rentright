import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'


const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: true, tabBarActiveTintColor: '#155e75', }}>
      <Tabs.Screen name="home" options={{
        title: "Home", tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="save" options={{
        title: "Save", tabBarIcon: ({ color, size }) => (
          <Ionicons name="heart" size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="message" options={{
        title: "Message", tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbubble" size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="profile" options={{
        title: "Profile", tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" size={size} color={color} />
        )
      }} />
    </Tabs>
  )
}

export default TabsLayout