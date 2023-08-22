import React ,  { useState } from "react";

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
import { Button, SocialIcon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
// import { useRouter } from "expo-router";

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
    </View>
  );
};

export default Home;
