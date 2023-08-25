import React, { useContext, useEffect, useState } from "react";
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
import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "../App";
import axios from "axios";



function Cart({ navigation }) {
  const { product, data } = useContext(AppContext);
  const id = data[2];
  // console.log(id)
  const [order, setOrder] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://backend-e-commerce-nffh.onrender.com/users/get-order/${id}`)
      .then((response) => {
        setOrder(response.data.userOrders);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
// console.log(order[0].OrderDate)
  useEffect(() => {
    const orderProductIDs = order.map((orderItem) => orderItem.ProductID);
    const filtered = [];
    for (const id of orderProductIDs) {
      const matchingProducts = product.filter((product) => product.id === id);
      filtered.push(...matchingProducts);
    }
    setFilteredProducts(filtered);
  }, [order]);

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


  // console.log(filteredProducts);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EFEFF2" barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.productList}>
        {filteredProducts.map((product) => (
          <View key={product.id} style={styles.productItem}>
            <View style={styles.div}>
              <Image src={product.image} style={{width:50, height:50}} />
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
          onPress={() => navigation.navigate("CheckOut",{id})}
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
