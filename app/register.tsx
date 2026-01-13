import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "@/components/MyButton";
import { Link, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const Login = () => {
  const router = useRouter();

  const onRegister = () => {
    router.navigate("/login");
  };

  const back = () => {
    router.navigate("/login");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
            <TouchableOpacity style = {styles.backButton} onPress={back}>
                <Ionicons name="arrow-back-outline" size={30} color="#646464" />
            </TouchableOpacity>


      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Create Account</Text>
        <Text style={styles.subHeading}>
          Create a new account to get started and enjoy seamless access to our
          features.
        </Text>
      </View>

      <View style={styles.credsContainer}>
        <View style={styles.inputWrapper}>
          <Ionicons name="person" size={20} color="#646464" />
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicons name="mail" size={20} color="#646464" />
          <TextInput
            style={styles.textInput}
            placeholder="Email address"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed" size={20} color="#646464" />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed" size={20} color="#646464" />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <MyButton title={"Register"} onPress={onRegister} />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Already have an account?</Text>
        <Link href={"/login"} style={styles.SignUpLink}>
          {" "}
          Sign In here
        </Link>
      </View>

      <View style={styles.LineContainer}>
        <View style={styles.horizontalLine}></View>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Or Continue With Account</Text>
        <View style={styles.linkContainer}>
          <Link href="https://www.facebook.com">
            <View style={styles.linkCircle}>
              <Ionicons name="logo-facebook" size={30} color={"black"} />
            </View>
          </Link>
          <Link href="https://www.google.com/">
            <View style={styles.linkCircle}>
              <Ionicons name="logo-google" size={30} color={"black"} />
            </View>
          </Link>
          <Link href="https://www.apple.com/">
            <View style={styles.linkCircle}>
              <Ionicons name="logo-apple" size={30} color={"black"} />
            </View>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  heading: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#010F1C",
  },

  headingContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    gap: 10,
    paddingBottom: 40,
    paddingHorizontal: 30,
  },

  subHeading: {
    textAlign: "center",
    color: "#939393",
  },

  credsContainer: {
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  inputWrapper: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    paddingHorizontal: 20,
  },

  textInput: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    color: "#646464",
  },

  buttonContainer: {
    paddingHorizontal: 20,
  },

  rememberMeContainerStyle: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  rememberLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  rememberMeText: {
    color: "#010F1C",
  },

  forgotText: {
    color: "#010F1C",
  },

  checkBoxStyle: {
    height: 15,
    width: 15,
  },
  bottomText: {
    color: "#939393",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  SignUpLink: {
    color: "#3BB77E",
    fontWeight: "bold",
  },
  horizontalLine: {
    backgroundColor: "#939393",
    width: "90%",
    height: 0.5,
    alignSelf: "center",
  },
  LineContainer: {
    paddingVertical: 10,
  },
  footerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#939393",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 15,
    width: "70%",
  },
  linkCircle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
  position: "absolute",
  top: 30,
  left: 16,
  width: 36,
  height: 36,
  justifyContent: "center",
  alignItems: "center",
}
});