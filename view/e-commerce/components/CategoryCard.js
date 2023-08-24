import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';


const CategoryCard = ({name , image , isSelected}) => {
  return (
   
        <View style={[
          styles.item,
          {
            borderColor: isSelected ? '#B7076B' : 'lightgrey',
            borderWidth: isSelected ? 2 : 1,
          },
        ]} >
          <Image 
          source= {{ uri: image }}
          resizeMode='center'
          style={{width: 60, height : 50,marginBottom:3,}}
          />
        <Text style={{color: 'black', textAlign: 'center', marginBottom:5,}}>{name}</Text>
        </View>
  )
}
const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 5,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 8,
        height: 100,
        width: 100,
        },
})
export default CategoryCard