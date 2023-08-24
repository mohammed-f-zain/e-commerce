import React from "react";
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons or any other icon library you're using

const T1 = require("../assets/t1.png");
const T2 = require("../assets/t2.png");
const T3 = require("../assets/t3.png");
const T4 = require("../assets/t4.png");

function Cart({ navigation, route }) {
  const { cartItem } = route.params;
  // console.log(cartItem);
  navigation.setOptions({
    title: "cart",
    headerStyle: {
      backgroundColor: "#EFEFF2",
    },
    headerTintColor: "#000",
    headerLeft: () => (
      <TouchableOpacity
        style={{
          marginLeft: 15,
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="ios-arrow-back" size={24} color="#000" />
      </TouchableOpacity>
    ),
  });

  const products = [
    { id: 1, name: "Product 1", price: "$10", quantity: 1, image: T1 },
    { id: 2, name: "Product 2", price: "$15", quantity: 6, image: T2 },
    { id: 4, name: "Product 2", price: "$15", quantity: 3, image: T3 },
    { id: 5, name: "Product 2", price: "$15", quantity: 3, image: T3 },
    { id: 6, name: "Product 2", price: "$15", quantity: 3, image: T3 },
    { id: 7, name: "Product 2", price: "$15", quantity: 3, image: T3 },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EFEFF2" barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.productList}>
        {products.map((product) => (
          <View key={product.id} style={styles.productItem}>
            <View style={styles.div}>
              <Image source={product.image} />
            </View>
            <View>
              <Text>{product.name}</Text>
              <Text>{product.price}</Text>
            </View>
            <TouchableOpacity style={styles.incr}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text>{product.quantity}</Text>
            <TouchableOpacity style={styles.incr}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.total}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalText}>1000$</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.checkbutton}
          onPress={() => navigation.navigate("CheckOut")}
        >
          <Text style={styles.checkout}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  productList: {
    flexGrow: 1,
    padding: 30,
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 20,
  },
  productItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    padding: 30,
  },
  buttonContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
  div: {
    backgroundColor: "#ECECEA",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 24,
    color: "#B7076B",
  },
  incr: {
    backgroundColor: "#FEEBE5",
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
  checkout: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  checkbutton: {
    backgroundColor: "#B7076B",
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default Cart;
