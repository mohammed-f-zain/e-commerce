import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { StatusBar } from "react-native";

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

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Profile</Text>
      <StatusBar style="auto" />

      <View style={styles.usercontainer}>
        <Image
          source={require("../assets/profile-picture.png")}
          style={styles.image}
        />
        <View style={styles.userMainInformation}>
          <Text style={styles.username}>Username</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
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
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingHorizontal: 16,
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
