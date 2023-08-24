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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 15,
        }}
      >
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
    // borderColor: 'lightgrey',
    // borderWidth: 1,
    borderRadius: 8,
    height: 200,
    width: 150,
    backgroundColor: "white",
    // shadowColor: '#000',
    // shadowOffset: { width: 3, height: 3 },
    // shadowOpacity: 0.3,
    // shadowRadius: 8,
  },
});
export default ProductCard;
