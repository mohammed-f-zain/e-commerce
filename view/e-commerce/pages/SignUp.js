import React, { useState } from "react";
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
import styles from "./style"; // Make sure to import your style file

const SignUp = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onLogInPress = () => {
    navigation.navigate("Login");
  };

  const fetchPost = async () => {
    try {
      const response = await axios.post(
        "https://class-a-back.onrender.com/users/add-user",
        {
          username,
          email,
          password,
        }
      );
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
      console.error("Error response:", error.response);
    }
  };

  const onSignUpPress = async () => {
    let hasError = false;

    if (!username) {
      setUsernameError("Username is required");
      hasError = true;
    }

    if (!email) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    try {
      await fetchPost();
    } catch (error) {
      console.error(error);
    }
  };

  const isValidEmail = (email) => {
    // Your email validation logic here
  };

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
            {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}

            <TextInput
              placeholder="Email"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              value={email}
              onChangeText={setEmail}
            />
            {emailError && <Text style={styles.errorText}>{emailError}</Text>}

            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

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
