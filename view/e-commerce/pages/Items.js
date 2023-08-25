import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { AppContext } from "../App";
import { Button } from "react-native-elements";

function Items({ route }) {
  const { itemData } = route.params;
  const navigation = useNavigation();

  navigation.setOptions({
    title: itemData.name,
    headerStyle: {
      backgroundColor: "#EFEFF2",
    },
    headerTintColor: "#000",
  });
  const addToCart = (cartItem) => {
    navigation.navigate("Cart", { cartItem });
  };
  const { data } = useContext(AppContext);
  const userID = data[2];
  const productID = itemData.id;
  const quantity = 1;
  const [addCart, setAddCart] = useState([]);
  const fetchPost = async () => {
    try {
      const response = await axios.post(
        "https://backend-e-commerce-nffh.onrender.com/users/add-order",
        {
          userID,
          productID,
          quantity,
        }
      );
      setAddCart(response.data);
      addToCart(itemData);
    } catch (error) {
      console.error("Error:", error);
      console.error("Error response:", error.response);
    }
  };
  console.log(addCart);
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#EFEFF2" barStyle="dark-content" />

        <Image
          src={itemData.image}
          // resizeMode="center"
          style={{
            width: 410,
            height: 590,
            marginBottom: 3,
            backgroundColor: "#FFFAF6",
            borderRadius: 8,
          }}
        />
        <View style={styles.details}>
          <View style={styles.headerItem}>
            <Text style={styles.itemName}>{itemData.name}</Text>
            <Text style={styles.itemName}>{itemData.price} JD</Text>
          </View>
          <View style={styles.descBtn}>
            <Text style={styles.description}>{itemData.description}</Text>
            <TouchableOpacity onPress={() => fetchPost()} style={styles.button}>
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Items;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  // test: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: 300,
  //   height: 400,
  // },
  details: {
    backgroundColor: "#fff",
    padding: 20,
  },
  headerItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  itemName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#B7076B",
    borderRadius: 10,
    textAlign: "center",
    padding: 10,
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    color: "#7F7F7F",
    lineHeight: 22,
    fontSize: 15,
  },
  descBtn: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 19,
  },
});
