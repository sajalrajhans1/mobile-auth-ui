import React from 'react'
import {Stack} from 'expo-router'
const _layout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name = "login" options={{title: "Login", animation: 'fade_from_bottom'}} />
        <Stack.Screen name = "register" options={{title: "Register", animation: 'fade_from_bottom'}} />
        <Stack.Screen name = "loggedIn" options={{title: "Welcome", headerShown: true, animation: 'fade_from_bottom'}} />
    </Stack>
  )
}

export default _layout

