import React from 'react'
import { View, ScrollView, Text, StatusBar, StyleSheet ,Image, TouchableOpacity, TextInput} from 'react-native';

function Payment({navigation}) {
    navigation.setOptions({
        title: 'Payment',
        headerStyle: {
          backgroundColor: '#EFEFF2',
        },
        headerTintColor: '#000',
      });
  return (

        <View style={styles.container}>
                <StatusBar backgroundColor="#EFEFF2" barStyle="dark-content"/>
      <ScrollView contentContainerStyle={styles.productList}>
        <View style={styles.contain}>
            <View style={styles.card}>
            <Text>Enter Card Number</Text>
            <TextInput
            placeholder="1234 5678 9012 3456"
            />
            </View>
            <View>
            <Text>Enter Card Expiry</Text>
            <TextInput
            placeholder="06/23"
            style={styles.card}
            />
            <Text>Enter Card CVV</Text>
            <TextInput
            placeholder="123"
            />
            </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.checkbutton}>
        <Text style={styles.checkout}>Pay $1000</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'space-between',
},
productList: {
flexGrow: 1,
padding:30,
},
buttonContainer: {
padding: 10,
borderTopWidth: 1,
borderTopColor: 'lightgray',
},
checkout:{
color:"#fff",
fontSize:18,
textAlign:"center",
},
checkbutton:{
backgroundColor:"#B7076B",
height:50,
padding: 10,
borderRadius: 10,
},
contain:{
backgroundColor:"#fff",
borderRadius:20,
padding:20,
},
card:{
borderBottomColor:'#E9E9EC',
borderBottomWidth: 2,
}
  });
export default Payment
