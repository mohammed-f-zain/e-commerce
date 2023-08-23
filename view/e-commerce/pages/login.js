import React, { useState } from "react";

import styles from "./style";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fetchPost = async () => {
    try {
      const response = await axios.post(
        `https://project-e-commerce-v4bs.onrender.com/users`,
        {
          email,
          password,
        }
      );
      console.log("Response:", response.data);
      // navigation.navigate("home");
    } catch (error) {
      console.error("Error:", error);
      console.error("Error response:", error.response);
    }
  };

  // const onLoginPress = () => {
  //   navigation.navigate("home");
  // };
  const navigation = useNavigation();

  const onForgotPasswordPress = () => {
    navigation.navigate("ForgotPassword");
  };
  const onSignUpPress = () => {
    navigation.navigate("signup");
  };

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Image
              source={require("../assets/logo.png")}
              style={{
                width: 120,
                height: 120,
                marginStart: 120,
                marginTop: 100,
              }}
              resizeMode="contain"
            />

            <Text style={styles.logoText}>Log in</Text>
            <TextInput
              placeholder="Email"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={onForgotPasswordPress}>
              <Text style={{ marginStart: 220, marginBottom: 15 }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <Button
              buttonStyle={styles.loginButton}
              onPress={fetchPost}
              title="Login"
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 250,
                marginStart: 70,
              }}
            >
              <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={onSignUpPress}>
                <Text style={{ color: "#B7076B", fontWeight: "bold" }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
