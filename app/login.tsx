import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "@/components/MyButton";
import { Link, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Checkbox } from "expo-checkbox";

const Login = () => {
  const router = useRouter();
  const [isChecked, setChecked] = useState(false);

  const onLogin = () => {
    router.navigate("/loggedIn");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Log in</Text>
        <Text style={styles.subHeading}>
          Enter your email and password to securely access your account and
          manage your services.
        </Text>
      </View>

      <View style={styles.credsContainer}>
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
            secureTextEntry
          />
        </View>

        <View style={styles.rememberMeContainerStyle}>
          <View style={styles.rememberLeft}>
            <Checkbox
              style={styles.checkBoxStyle}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>

          <Text style={styles.forgotText}>Forgot Password</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <MyButton title={"Login"} onPress={onLogin} />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Don't have an account?</Text>
        <Link href={"/register"} style={styles.SignUpLink}>
          {" "}
          Sign Up here
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
    paddingTop: 100,
    gap: 10,
    paddingBottom: 40,
    paddingHorizontal: 30,
  },

  subHeading: {
    textAlign: "center",
    color: "#939393",
  },

  credsContainer: {
    paddingBottom: 50,
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
    paddingVertical: 20,
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
    paddingVertical: 20,
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
});
