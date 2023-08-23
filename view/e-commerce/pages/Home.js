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
const countries = [
  {
    id: "1",
    name: "T-shirt",
    image: "https://cdn.icon-icons.com/icons2/1082/PNG/512/tshirt_78128.png",
  },
  {
    id: "2",
    name: "Jackets",
    image: "https://cdn-icons-png.flaticon.com/512/1785/1785396.png",
  },
  {
    id: "3",
    name: "pants",
    image: "https://cdn-icons-png.flaticon.com/512/3893/3893044.png",
  },
  {
    id: "4",
    name: "View All",
  },
];
const Home = () => {
  // const router = useRouter();
  //   const { data, isLoading, error } = useFetch("search", {//useFetch.js
  //     query: "React developer",
  //     num_pages: "1",
  //   });
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
    // You can perform your search logic here
  };

  {
    /* An item renderer */
  }
  const renderItem = ({ item }) => <CategoryCard name={item.name} image={item.image}/>;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        marginStart: 50,
        marginTop: 100,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: "30" }}>New Arraivals</Text>
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

      <View style={styles.containerCategories}>
        <FlatList
          data={countries}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>

      <View style={styles.containerCategories}>
        <FlatList
          data={countries}
          renderItem={renderItem}
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
