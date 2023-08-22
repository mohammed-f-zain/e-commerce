// import React from 'react';
// import { StatusBar, Button, ScrollView ,Text} from 'react-native';

// const FirstPage = ({ navigation }) => {
//   navigation.setOptions({
//     title: 'Products ',
//     headerStyle: {
//       backgroundColor: '#EFEFF2',
//     },
//     headerTintColor: '#000',
//   });
//   return (
//     <ScrollView>
//       <StatusBar backgroundColor="#EFEFF2" barStyle="dark-content"/>
//       <Button
//         title="Go to Item"
//         onPress={() => navigation.navigate('Item')}
//       />
//       <Button
//         title="Go to cart"
//         onPress={() => navigation.navigate('Cart')}
//       />
//       <Button
//         title="Go to payment page"
//         onPress={() => navigation.navigate('Payment')}
//       />
//       <Button
//         title="Go to Congratulation page"
//         onPress={() => navigation.navigate('Congratulation')}
//       />
//     </ScrollView>
//   );
// };
// export default FirstPage;
import React from 'react';
import { View, FlatList, Text, StyleSheet, Dimensions,Image } from 'react-native';
import product from '../assets/product.png'
const products = [
  { id: '1', name: 'Product 1', price: '$10',image:product},
  { id: '2', name: 'Product 2', price: '$15',image:product},
  { id: '3', name: 'Product 3', price: '$20',image:product},
  // Add more products as needed
];

const numColumns = 2; // Number of columns in the grid

const ProductGrid = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
    <Image source={item.image} style={styles.image}/>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth / numColumns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 350, // Set your desired height for each grid item
    width: itemWidth - 20, // Adjusted for margin/padding
    margin: 10,
    borderRadius:20
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '70%', // Adjust the image height as needed
    resizeMode: 'cover',
  }
});

export default ProductGrid;
