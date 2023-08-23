import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "./pages/Products";
import Item from "./pages/Items";
import Cart from "./pages/Cart";
import Payment from "./pages/PaymentCard";
import Congratulation from "./pages/Congratulation";
import CheckOut from "./pages/CheckOut";
import Profile from "./pages/Profile";
import LoginScreen from "./pages/login";
import SignUpScreen from "./pages/SignUp";
import HomeContainer from "./pages/HomeContainer";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
         {/* <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }}/>  */}
        <Stack.Screen name="signup"  component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={HomeContainer} options={{ headerShown: false }} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Congratulation" component={Congratulation} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
