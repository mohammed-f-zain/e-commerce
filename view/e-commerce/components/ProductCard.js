import React from "react";

// import styles from "../pages/style";
import { Text, View, StyleSheet, Image } from "react-native";

const ProductCard = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={item.image}
        // resizeMode="center"
        style={{
          width: 130,
          height: 140,
          marginBottom: 3,
          backgroundColor: "#FFFAF6",
          borderRadius: 8,
        }}
      />
      <View>
        <Text style={{ color: "black", fontWeight: "bold" }}>{item.name}</Text>
        <Text>{item.price}$</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 8,
    height: 200,
    width: 150,
    backgroundColor: "white",
  },
});
export default ProductCard;
