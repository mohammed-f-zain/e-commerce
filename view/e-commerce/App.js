import { React, createContext, useState } from "react";
import { StatusBar } from "react-native";
import {
  NavigationContainer,
  validatePathConfig,
} from "@react-navigation/native";
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

export const AppContext = createContext();

const App = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState()

  return (
    <AppContext.Provider value={{ data, setData, product, setProduct, quantity, setQuantity }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FirstPage">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          {/* <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }}/>  */}
          <Stack.Screen
            name="signup"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="home"
            component={HomeContainer}
            options={{
              gestureEnabled: false,
              headerLeft: null,
              headerShown: false,
            }}
          />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="Item" component={Item} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Congratulation" component={Congratulation} />
          <Stack.Screen name="CheckOut" component={CheckOut} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};
export default App;
