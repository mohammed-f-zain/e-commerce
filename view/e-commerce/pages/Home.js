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
// import { useRouter } from "expo-router";
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
      productImage: "https://cdn.icon-icons.com/icons2/1082/PNG/512/tshirt_78128.png",
      price: 30,
      isSelected: true,
    },
    {
      id: "2",
      CategoryName: "Jackets",
      image: "https://cdn-icons-png.flaticon.com/512/1785/1785396.png",
      productName: "",
      productImage: "",
      price: 0,
      isSelected: false,  
    },
    {
      id: "3",
      CategoryName: "pants",
      image: "https://cdn-icons-png.flaticon.com/512/3893/3893044.png",
      productName: "",
      productImage: "",
      price: 0,
      isSelected: false,
    },
  ]);
  const [selectedCategoryName, setSelectedCategoryName] = useState(data[0].CategoryName); // Initialize with the first category
  const selectedItemId = data.find(item => item.isSelected)?.id; // Get the ID of the selected item

  // fuctions

  const handleSearch = (text) => {
    setSearchText(text);
    // You can perform your search logic here
  };


// handles selected category and makes sure only one is selected
 const OnCategoryPress = categoryName => {
  setData(prevData =>
    prevData.map(item =>
      item.CategoryName === categoryName
        ? { ...item, isSelected: true }
        : { ...item, isSelected: false }
    )
  );
  setSelectedCategoryName(categoryName);
};


  {
    /* An item renderer */
  }
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => OnCategoryPress(item.CategoryName)}>
    <CategoryCard name={item.CategoryName} image={item.image} isSelected={item.isSelected}/>
    </TouchableOpacity>
  );
  
  const renderProductItem = ({ item }) => {
    if (item.CategoryName === selectedCategoryName) {
      return (
    <TouchableOpacity onPress={() => OnProductPress(item.id)}>
    <ProductCard name={item.productName} price={item.price} image={item.productImage} />
    </TouchableOpacity>)}
    return null;
        }

 
  const OnProductPress = itemId => {
    // Navigate to the item page with the selected item's ID
    navigation.navigate("Item", { itemId });
  };
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        marginStart: 50,
        marginTop: 100,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: "40" }}>New Arraivals</Text>
      <Text style={{ color: "grey", marginTop: 20 }}>
        Custom clothing for the mordern unique man
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

{/* Category Section */}
      <View style={styles.containerCategories}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          
        />
      </View>

{/* products section */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        
        {selectedItemId && ( // Display selected item's CategoryName if it exists
        <Text style={{ fontSize: 30, marginTop: 10, marginBottom: 5 }}>
          {data.find(item => item.id === selectedItemId).CategoryName}
        </Text>
      )}

      {/* static button */}
        <Text style={{ marginEnd: 50, color: "grey", marginTop: 10 }}>
          Show All
        </Text>
      </View>

      <View style={{ padding: 2, marginStart: -15 }}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color="red" />
         ) : error ? (
          <Text>Something went wrong</Text>
        ) : ( 
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: d }}
            horizontal
          />
        )}
      </View> */}
    </View>
  );
};

export default Home;
