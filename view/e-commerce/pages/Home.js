import React, { useState } from "react";
import styles from "./style";

import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

  const [data, setData] = useState([
    {
      id: "1",
      CategoryName: "T-shirts",
      image: "https://cdn.icon-icons.com/icons2/1082/PNG/512/tshirt_78128.png",
      productName: "White T-shirt",
      productImage:
        "https://cdn.icon-icons.com/icons2/1082/PNG/512/tshirt_78128.png",
      price: 30,
      isSelected: false,
    },
    {
      id: "2",
      CategoryName: "Jackets",
      image: "https://cdn-icons-png.flaticon.com/512/1785/1785396.png",
      productName: "blue jacket",
      productImage: "",
      price: 50,
      isSelected: false,
    },
    {
      id: "3",
      CategoryName: "pants",
      image: "https://cdn-icons-png.flaticon.com/512/3893/3893044.png",
      productName: "black pant",
      productImage: "",
      price: 0,
      isSelected: false,
    },
  ]);
  const [selectedCategoryName, setSelectedCategoryName] = useState(null);
  const selectedItemId = data.find((item) => item.isSelected)?.id;

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const OnCategoryPress = (categoryName) => {
    if (selectedCategoryName === categoryName) {
      setSelectedCategoryName(null);
      setData((prevData) =>
        prevData.map((item) => ({ ...item, isSelected: false }))
      );
    } else {
      setSelectedCategoryName(categoryName);
      setData((prevData) =>
        prevData.map((item) =>
          item.CategoryName === categoryName
            ? { ...item, isSelected: true }
            : { ...item, isSelected: false }
        )
      );
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => OnCategoryPress(item.CategoryName)}>
      <CategoryCard
        name={item.CategoryName}
        image={item.image}
        isSelected={item.isSelected}
      />
    </TouchableOpacity>
  );

  const renderProductItem = ({ item }) => {
    if (
      selectedCategoryName === null ||
      item.CategoryName === selectedCategoryName
    ) {
      return (
        <TouchableOpacity onPress={() => OnProductPress(item.id)}>
          <ProductCard
            name={item.productName}
            price={item.price}
            image={item.productImage}
          />
        </TouchableOpacity>
      );
    }
    return null;
  };

  const OnProductPress = (itemId) => {
    navigation.navigate("Item", { itemId });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        marginStart: 50,
        marginTop: 20,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 40 }}>New Arrivals</Text>
      <Text style={{ color: "grey", marginTop: 20 }}>
        Custom clothing for the modern unique man
      </Text>
      <View style={styles.container}>
        <FontAwesome name="search" size={18} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
      {/* select -> pink , unselect ->*/}
      <View style={styles.containerCategories}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {selectedItemId && (
          <Text style={{ fontSize: 30, marginTop: 10, marginBottom: 5 }}>
            {data.find((item) => item.id === selectedItemId).CategoryName}
          </Text>
        )}

        <Text style={{ marginEnd: 50, color: "grey", marginTop: 60 }}>
          Show All
        </Text>
      </View>
      {/* edit this to make the scroll vertical And Flex:1 , so you can see all the items. */}
      <View style={{ padding: 2, marginStart: -13, flex: 1 }}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id}
          vertical
        />
      </View>
    </View>
  );
};

export default Home;
