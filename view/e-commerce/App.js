import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from './pages/Products';
import Item from './pages/Items';
import Cart from './pages/Cart';
import Payment from './pages/PaymentCard';
import Congratulation from './pages/Congratulation';
const Stack = createStackNavigator();


const App = () => {
  return (


    <NavigationContainer>
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Item" component={Item} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Congratulation" component={Congratulation} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

