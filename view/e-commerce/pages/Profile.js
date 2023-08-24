import { StyleSheet, Text, View, Image } from "react-native";
import { React, useContext } from "react";
import { StatusBar } from "react-native";
import { AppContext } from "../App";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const MenuItem = ({ category, info }) => (
  <View style={styles.usercategories}>
    <Text style={styles.category}>{category}</Text>
    <View style={styles.userinfo}>
      <Text style={styles.email}>{info}</Text>
      <View style={styles.arrowimage}>
        <Image source={require("../assets/arrow.png")} />
      </View>
    </View>
  </View>
);

const Profile = ({ navigation }) => {
  const { data } = useContext(AppContext);
  navigation.setOptions({
    title: "profile",
    headerStyle: {
      backgroundColor: "#EFEFF2",
    },
    headerTintColor: "#000",
  });

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>My Profile</Text>
        <StatusBar style="auto" />
        <View style={styles.usercontainer}>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.image}
          />
          <View style={styles.userMainInformation}>
            <Text style={styles.username}>{data[0]}</Text>
            <Text style={styles.email}>{data[1]}</Text>
          </View>
          <MaterialIcons
            name="logout"
            size={30}
            color="black"
            onPress={() => navigation.navigate("Login")}
            style={{ marginLeft: 160 }}
          />
        </View>
        <MenuItem category="My Orders" info="Already have 12 orders" />
        <View style={styles.horizontalLine} />
        <MenuItem category="Shipping Addresses" info="3 addresses" />
        <View style={styles.horizontalLine} />
        <MenuItem category="Payment Methods" info="Visa **34" />
        <View style={styles.horizontalLine} />
        <MenuItem category="Promo Codes" info="You have special promocodes" />
        <View style={styles.horizontalLine} />
        <MenuItem category="My Reviews" info="Reviews for 4 items" />
        <View style={styles.horizontalLine} />

        <MenuItem category="Settings" info="Notifications, password" />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingHorizontal: 16,
    backgroundColor: "#EFEFF2",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
  },
  usercontainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 2,
    borderRadius: 50,
  },
  arrowimage: {
    width: 16,
    height: 16,
  },
  userMainInformation: {
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "gray",
  },
  usercategories: {
    marginVertical: 20,
  },
  userinfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 1,
  },
});
