import React, { useState, useEffect } from "react";
import styles from "./style";
import axios from "axios";
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
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState(null);

  const [itemData, setItemData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("https://project-e-commerce-v4bs.onrender.com/products")
      .then((response) => {
        setItemData(response.data);
        setFilteredData(response.data); // Initialize filtered data with all products
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategoryName) {
      // Filter products based on selected category
      const filteredProducts = itemData.filter(
        (item) => item.name === selectedCategoryName
      );
      setFilteredData(filteredProducts);
    } else {
      // If no category is selected, show all products
      setFilteredData(itemData);
    }
  }, [selectedCategoryName, itemData]);
  const cat = [
    {
      CategoryName: "T-shirt",
      image: "https://cdn.icon-icons.com/icons2/1082/PNG/512/tshirt_78128.png",
      isSelected: false,
    },
    {
      CategoryName: "Jacket",
      image: "https://cdn-icons-png.flaticon.com/512/1785/1785396.png",
      isSelected: false,
    },
    {
      CategoryName: "Jeans",
      image: "https://cdn-icons-png.flaticon.com/512/3893/3893044.png",
      isSelected: false,
    },
  ];
  useEffect(() => {
    if (searchText) {
      // Filter products based on search text
      const filteredProducts = itemData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filteredProducts);
    } else {
      // If search text is empty, show all products or filtered by category
      if (selectedCategoryName) {
        const filteredProducts = itemData.filter(
          (item) => item.category === selectedCategoryName
        );
        setFilteredData(filteredProducts);
      } else {
        setFilteredData(itemData);
      }
    }
  }, [searchText, itemData, selectedCategoryName]);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const OnCategoryPress = (categoryName) => {
    if (selectedCategoryName === categoryName) {
      setSelectedCategoryName(null);
    } else {
      setSelectedCategoryName(categoryName);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => OnCategoryPress(item.CategoryName)}>
      <CategoryCard
        name={item.CategoryName}
        image={item.image}
        isSelected={item.CategoryName === selectedCategoryName}
      />
    </TouchableOpacity>
  );

  const OnProductPress = (itemData) => {
    navigation.navigate("Item", { itemData });
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
      <View style={styles.containerCategories}>
        <FlatList
          data={cat}
          renderItem={renderItem}
          keyExtractor={(item) => item.CategoryName}
          horizontal
        />
      </View>

      <ScrollView style={{ padding: 2, marginStart: -45, flex: 1 }}>
        {filteredData.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => OnProductPress(item)}
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <ProductCard item={item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
