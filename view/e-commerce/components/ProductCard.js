import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ProductCard = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        src={item.image}
        // resizeMode="center"
        style={{
          width: 150,
          height: 170,
          marginBottom: 15,
          backgroundColor: "#FFFAF6",
          borderRadius: 8,
        }}
      />
      <View style={{flexDirection: 'column'}}>
        <Text style={{ color: "black", fontWeight: "bold", marginBottom: 5,}}>{item.name}</Text>
        <Text style={{fontSize: 12}}>{item.price}$</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 15,
    borderRadius: 8,
    height: 250.5,
    width: 175,
    backgroundColor: "white",
  },
});
export default ProductCard;
