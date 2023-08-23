import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import congratulation from "../assets/Group 28.png";

function Congratulation({ navigation }) {
  navigation.setOptions({
    headerStyle: {
      backgroundColor: "#EFEFF2",
    },
    headerTintColor: "#000",
  });
  return (
    <View style={styles.container}>
      <Image source={require("../assets/congras-photo.png")} />
      <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 30 }}>
        Congratulations!!!
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Download Reciept</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}  onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text2}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 100,
  },
  button: {
    backgroundColor: "#B10767",
    padding: 20,
    borderRadius: 20,
    width: "100%",
  },
  button2: {
    backgroundColor: "#E1D1DB",
    padding: 20,
    borderRadius: 20,
    width: "100%",
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
  },
  text2: {
    textAlign: "center",
    color: "#B10767",
    fontSize: 18,
  },
});
export default Congratulation;
