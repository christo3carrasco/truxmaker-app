import { View, Text, StyleSheet, Pressable, TextInput, ScrollView } from 'react-native'
import { useData } from '../../hooks/useData';
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Login(props) {
    const { LoginWithEmailAndPassword, LoginWithGoogleAccount } = useData(); 
    // Login with email and password
    const [tempUser,SetTempUser] = useState({
        email:'', 
        password:'', 
    })
    const handleChange = (e, nameInput) => {
        SetTempUser({...tempUser, [nameInput]:e})
    }
    const handleSubmit = async() => {
        await LoginWithEmailAndPassword(tempUser.email, tempUser.password); 
    }
    // Login with Google
    const handleSubmitGoogle = async() => {
        // await LoginWithGoogleAccount(); 
    }

  return (
    <ScrollView styles = {styles.Container} >
        <View style = {styles.InfoContainer}>
            <Text style = {styles.Title}>Iniciar Sesión</Text>
            <Text style = {styles.Subtitle}>Disfruta de todas las novedades que tenemos dispuestas para ti!</Text>
        </View>
        <View style = {styles.Form}>
            <TextInput style = {styles.Input} placeholder='correo@gmail.com' onChangeText={(e)=>{handleChange(e,'email')}}/>
            <TextInput style = {styles.Input} placeholder='*****************'  onChangeText={(e)=>{handleChange(e,'password')}}/>
            <Pressable style = {styles.Button} onPress={()=>{handleSubmit()}}>
                <Text style = {styles.ButtonText}>Login</Text>
            </Pressable>
            <Text style = {styles.MoreOptionsSeparator}>o</Text>
            <Pressable style={styles.Button} onPress={()=>{handleSubmitGoogle()}}>
                <Icon name='google' size={20} color={'white'}/>
                <Text style = {styles.ButtonText}>Continuar con google</Text>
            </Pressable>
            <Pressable style = {styles.Button}>
                <Icon name='facebook' size={20} color={'white'}/>
                <Text style = {styles.ButtonText}>Continuar con facebook</Text>
            </Pressable>
        </View>
    </ScrollView>
    
  )
}
const styles = StyleSheet.create({
    Container:{
        position:'relative', 
        width:'100%',
        height:'400',
    },
    InfoContainer:{
        padding:15,
        paddingTop:50,
        backgroundColor:'#264653', 
        height:'auto',
    },
    Title:{
        fontSize:35,
        fontWeight:'900',
        color:'#e9c46b',
    }, 
    Subtitle:{
        fontWeight:'700',
        color:'#e9c46b',
    },
    Form:{
        position:'relative',
        backgroundColor:'#F7F7F7',
        width:'100%',
        height:'auto',
        paddingTop:35,
        padding:15,
        display:'flex', 
        gap:20,
        borderTopRightRadius:30, 
        borderTopLeftRadius:30, 
    },
    Input:{
        borderRadius:20,
        backgroundColor:'#ebebeb',
        borderColor:'#ebebeb', 
        borderStyle:'solid',
        borderWidth:0.2,
        width:'100',
        height:60,
        padding:15,
    },
    Button:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        
        elevation: 22,
        borderRadius:20,
        width:'100%',
        height:50,
        display:'flex', 
        justifyContent:'center',
        alignItems:'center', 
        backgroundColor:'#264653',
        padding:10,
    },
    ButtonText:{
        color:'white',
        fontWeight:'700',
    },
    MoreOptionsSeparator:{
        textAlign:'center',
        fontSize:20,
    },
});