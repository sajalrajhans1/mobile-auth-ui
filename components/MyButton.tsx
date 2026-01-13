import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MyButton = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.6}
        onPress={onPress}
      >
        <Text style={styles.mainText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  mainText: {
    color: "white",
  },
  buttonContainer: {
    backgroundColor: "#3BB77E",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "40%",
    paddingVertical: 15,
    borderRadius: 50,
  },
});
