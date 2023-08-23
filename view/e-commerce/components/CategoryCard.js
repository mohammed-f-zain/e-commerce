import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';


const CategoryCard = ({name , image , isSelected}) => {
  return (
    //  A component to render individual item
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
        
    // <TouchableOpacity
    //   style={styles.container(selectedJob, item)}
    //   onPress={() => handleCardPress(item)}
    // >
    //   <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
    //     <Image
    //       source={{
    //         uri: checkImageURL(item?.employer_logo)
    //           ? item.employer_logo
    //           : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
    //       }}
    //       resizeMode='contain'
    //       style={styles.logoImage}
    //     />
    //   </TouchableOpacity>
    //   <Text style={styles.companyName} numberOfLines={1}>
    //     {item.employer_name}
    //   </Text>

    //   <View style={styles.infoContainer}>
    //     <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
    //       {item.job_title}
    //     </Text>
    //     <View style={styles.infoWrapper}>
    //       <Text style={styles.publisher(selectedJob, item)}>
    //         {item?.job_publisher} -
    //       </Text>
    //       <Text style={styles.location}> {item.job_country}</Text>
    //     </View>
    //   </View>
    // </TouchableOpacity>
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
        // shadowColor: '#000',
        // shadowOffset: { width: 3, height: 3 },
        // shadowOpacity: 0.3,
        // shadowRadius: 8,
        },
})
export default CategoryCard