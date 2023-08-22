import React from 'react';
import { StatusBar, Button, ScrollView ,Text} from 'react-native';

const FirstPage = ({ navigation }) => {
  navigation.setOptions({
    title: 'Products ',
    headerStyle: {
      backgroundColor: '#EFEFF2',
    },
    headerTintColor: '#000',
  });
  return (
    <ScrollView>
      <StatusBar backgroundColor="#EFEFF2" barStyle="dark-content"/>
      <Button
        title="Go to Item"
        onPress={() => navigation.navigate('Item')}
      />
      <Button
        title="Go to cart"
        onPress={() => navigation.navigate('Cart')}
      />
      <Button
        title="Go to payment page"
        onPress={() => navigation.navigate('Payment')}
      />
      <Button
        title="Go to Congratulation page"
        onPress={() => navigation.navigate('Congratulation')}
      />
    </ScrollView>
  );
};
export default FirstPage;
