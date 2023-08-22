import React from "react";
import { useState } from "react";
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
import { Button, SocialIcon, CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SignUp = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogInPress = () => {
    navigation.navigate("Login");
  };

  const fetchPost = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/add-user",
        {
          username,
          email,
          password,
        }
      );
      console.log("Sending request with data:", { username, email, password });

      console.log("Response:", response.data);
      // Handle response if needed (e.g., show a success message)
    } catch (error) {
      // Handle error, show an error message, etc.
      console.error("Error:", error);
    }
  };

  const onSignUpPress = async () => {
    try {
      await fetchPost();
      // Handle successful signup, navigation, or show a success message
    } catch (error) {
      // Handle error, show an error message, etc.
      console.error(error);
    }
  };

  const [isChecked, setChecked] = useState(false);

  const handleToggleCheckbox = () => {
    setChecked(!isChecked);
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

            <Text style={styles.logoText}>Sign Up</Text>
            <TextInput
              placeholder="Name"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              onChangeText={setUsername}
              value={username}
            />
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
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={handleToggleCheckbox}
              >
                <View style={[styles.checkbox, isChecked && styles.checked]} />
              </TouchableOpacity>
              <Text style={{ color: "grey" }}>I accept all the</Text>
              <Text> Terms and Conditions</Text>
            </View>
            <Button
              buttonStyle={styles.loginButton}
              style={{ marginTop: 40 }}
              onPress={() => onSignUpPress()}
              title="Sign Up"
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 170,
                marginStart: 70,
              }}
            >
              <Text>Already have an account? </Text>
              <TouchableOpacity onPress={onLogInPress}>
                <Text style={{ color: "#B7076B", fontWeight: "bold" }}>
                  Log In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
