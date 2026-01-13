import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const loggedIn = () => {
  return (
    <View style = {styles.mainContainer}>
      <Text>Hi! I hope you are alright.</Text>
    </View>
  )
}

export default loggedIn

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})