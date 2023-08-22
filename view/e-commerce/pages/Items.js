import React from 'react';
import { View, Text, Image,StatusBar ,ScrollView,Button,TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';
const product = require("../assets/item.png");
import { useNavigation } from '@react-navigation/native'; 

function Items({navigation} ) {
  navigation.setOptions({
    title: 'Items Title',
    headerStyle: {
      backgroundColor: '#EFEFF2',
    },
    headerTintColor: '#000',
  });
  return (
    <View style={styles.container}>
    <ScrollView>
    <StatusBar backgroundColor="#EFEFF2" barStyle="dark-content"/>
      <Image source={product}  style={styles.image}/>
      <View style={styles.details}>
        <View style={styles.headerItem}>
            <Text style={styles.itemName}>Item Name</Text>
            <Text style={styles.itemName}>20 JD</Text>
        </View>
        <View style={styles.descBtn}>
        <Text style={styles.description} >The Lord is my light and my salvation— whom shall I fear?  The Lord is the stronghold of my life—of whom shall I be afraid?" Psalm 27:1 (NLT)</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Products')}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection:"column",
  alignItems: 'center',
  justifyContent: 'center',
},
image: {
  flex: 1,
  justifyContent: "center",
  alignItems: 'center',
},
details:{
  backgroundColor:"#fff",
  borderTopRightRadius:50,
  padding:20,
  borderTopLeftRadius: 50,
  },
  headerItem:{
  flex:1,
  flexDirection:"row",
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom:40,
  },
itemName:{
  fontSize: 24,
  fontWeight: 'bold',
},
button:{
backgroundColor:"#B7076B",
borderRadius:10,
textAlign:'center',
padding:10,
marginTop:15,
},
buttonText:{
color: 'white',
fontSize: 18,
fontWeight: 'bold',
textAlign:'center',
},
description:{
color:"#7F7F7F",
lineHeight:22,
fontSize:15
},
descBtn:{
flex:1,
flexDirection:"column",
justifyContent: "space-between",
gap:19,
}
});

export default Items;
