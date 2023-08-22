import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Address({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <View style={styles.address}>
          {item.checked === true ? (
            <Ionicons name="checkmark-circle" size={24} color="black" />
          ) : (
            <Feather name="circle" size={24} color="grey" />
          )}
          <View>
            <Text style={styles.itemText}>{item.text}</Text>
            <Text style={styles.itemTextMobile}>{item.mobile}</Text>
            <Text style={styles.itemTextStreet}>{item.buildingNo}, {item.street}, {item.city}</Text>
          </View>
        </View>

        <AntDesign name="edit" size={24} color="grey" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 10,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
  address: {
    borderColor: "#bbb",
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    marginLeft: 10,
  },
  itemTextMobile: {
    marginLeft: 10,
    color: "gray",
  },
  itemTextStreet: {
    marginLeft: 10,
    color: "gray",
  },
});
