import React, { useContext, useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
// import { useFocusEffect } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "../App";
import axios from "axios";

function Cart({ navigation }) {
  const { product, data } = useContext(AppContext); // Add setOrder from context
  const id = data[2];
  const [order, setOrder] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  //fixed the cart render itmes
  const fetchCartItems = () => {
    axios
      .get(`https://backend-e-commerce-nffh.onrender.com/users/get-order/${id}`)
      .then((response) => {
        const orderProductIDs = response.data.userOrders.map(
          (orderItem) => orderItem.ProductID
        );
        const filtered = [];
        for (const id of orderProductIDs) {
          const matchingProduct = product.find((product) => product.id === id);
          if (matchingProduct) {
            const updatedProduct = {
              ...matchingProduct,
              quantity: 1,
              calculatedPrice: parseFloat(matchingProduct.price),
            };
            filtered.push(updatedProduct);
          }
        }
        setFilteredProducts(filtered);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchCartItems();

    const unsubscribe = navigation.addListener("focus", () => {
      fetchCartItems();
    });

    return unsubscribe;
  }, [navigation, product]);

  // end fixed the cart render itmes

  const handleDecrement = (productId) => {
    const updatedProducts = filteredProducts.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        const updatedQuantity = product.quantity - 1;
        const calculatedPrice = product.price * updatedQuantity;
        const updatedProduct = {
          ...product,
          quantity: updatedQuantity,
          calculatedPrice: calculatedPrice,
        };
        return updatedProduct;
      }
      return product;
    });

    setFilteredProducts(updatedProducts);
  };

  const handleIncrement = (productId) => {
    const updatedProducts = filteredProducts.map((product) => {
      if (product.id === productId) {
        const updatedQuantity = product.quantity + 1;
        const calculatedPrice = product.price * updatedQuantity;
        const updatedProduct = {
          ...product,
          quantity: updatedQuantity,
          calculatedPrice: calculatedPrice,
        };
        return updatedProduct;
      }
      return product;
    });

    setFilteredProducts(updatedProducts);
  };

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

  // Inside the calculateTotalPrice function
  const calculateTotalPrice = () => {
    return filteredProducts.reduce(
      (total, product) => total + product.calculatedPrice,
      0
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EFEFF2" barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.productList}>
        {filteredProducts.map((product) => (
          <View key={product.id} style={styles.productItem}>
            <View style={styles.div}>
              <Image
                source={{ uri: product.image }}
                style={{ width: 50, height: 50 }}
              />
            </View>
            <View>
              <Text>{product.name}</Text>
              <Text>{product.calculatedPrice.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
              style={styles.incr}
              onPress={() => handleDecrement(product.id)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text>{product.quantity}</Text>
            <TouchableOpacity
              style={styles.incr}
              onPress={() => handleIncrement(product.id)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.total}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalText}>
          {calculateTotalPrice().toFixed(2)}$
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.checkbutton}
          onPress={() => navigation.navigate("CheckOut", { id })}
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
