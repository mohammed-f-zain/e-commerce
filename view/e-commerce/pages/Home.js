import React, { useState , useEffect} from "react";

import styles from "./style";
import axios from "axios"
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

  const [itemData,setItemData]=useState([]);
useEffect(() => {
    axios.get("https://project-e-commerce-v4bs.onrender.com/products")
      .then(response => {
        setItemData(response.data);
        
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  // console.log(itemData.splice(0,2))
 
  const handleSearch = (text) => {
    setSearchText(text);
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
    
      {/* edit this to make the scroll vertical And Flex:1 , so you can see all the items. */}
      <ScrollView style={{ padding: 2, marginStart: -45, flex: 1 }}>
  {
   
    <TouchableOpacity style={{
      flexDirection: "row",
      flexWrap:"wrap",
      // alignItems: "center",
      justifyContent: "space-between",
      marginTop: 10,
    }}>
      {itemData.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </TouchableOpacity>
  }
</ScrollView>

    </View>
  );
};

export default Home;
