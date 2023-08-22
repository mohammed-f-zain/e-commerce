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
import { View, FlatList, Text, StyleSheet, Dimensions } from 'react-native';

const products = [
  { id: '1', name: 'Product 1', price: '$10' },
  { id: '2', name: 'Product 2', price: '$15' },
  { id: '3', name: 'Product 3', price: '$20' },
  // Add more products as needed
];

const numColumns = 2; // Number of columns in the grid

const ProductGrid = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
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
    height: 150, // Set your desired height for each grid item
    width: itemWidth - 20, // Adjusted for margin/padding
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default ProductGrid;
