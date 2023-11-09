
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, Pressable} from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'

export default function ProductCard(props) {
  const { product } = props; 
  const navigation = useNavigation();  
  const goToProduct = () =>{
    navigation.navigate('Product', {id:product.item.id}); 
  }
  return (
    <TouchableWithoutFeedback onPress={goToProduct}>
      <View style = {styles.Card}>
        <Image source={{uri:product.item.image}} style = {styles.ProductImage}/>
        <View style = {styles.ContainerInfoProduct}>
          <Text style={styles.CardTitle}>{product.item.title}</Text>
          <Text>
              {product.item.category}
          </Text>
        </View>
        <View style={styles.ContainerPay}>
          <Text style = {styles.Price}>
            S/.{product.item.price}
          </Text>
          <Pressable style = {styles.Button}>
            <Text style = {styles.ButtonText}>Add</Text>
            <Icon style = {styles.ButtonIcon} name='plus' color={'white'} ></Icon>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
    Card: {
      backgroundColor:'white',
      position:'relative', 
      margin:5,
      padding:10,  
      flex:1, 
      height:'auto', 
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',  
      gap:14,
      borderColor:'lightgray', 
      borderStyle:'solid',
      borderRadius:15,  
      borderWidth:1,
    },  
    ProductImage: {
      position: 'relative', 
      bottom: 2, 
      right: 2, 
      width: 90, 
      height: 90, 
      borderRadius:10,
    }, 
    ContainerInfoProduct:{
      width:'100%',
    },
    CardTitle:{
      fontStyle:'normal',
      fontWeight:'bold',
    },
    ContainerPay:{
      width:'100%',
      display: 'flex', 
      flexDirection:'row',
      justifyContent:'space-between', 
      alignItems:'center', 
      gap: 5, 
    },
    Price:{
      fontWeight:'bold',
    },
    Button:{
      padding:6,
      backgroundColor:'green',
      borderRadius: 5, 
      display:'flex',
      flexDirection:'row',
      gap:5, 
      alignItems:'center', 
      justifyContent:'center',
    },
    ButtonText:{
      color:'white',
    },
    ButtonIcon:{
      display:'flex', 
      justifyContent:'center',
      alignItems:'center',
    },
    
})


