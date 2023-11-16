import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useData } from '../../hooks/useData';

export default function Register() {
  const { Register } = useData(); 
  const [temRegisterUser, setTempResgisterUser] = useState(
    {
        firstNames:'', 
        lastNames:'', 
        email:'', 
        password:'', 
    }
    ); 
    const handleChange = (e, nameInput) => {
        setTempResgisterUser({
            ...temRegisterUser,
            [nameInput]:e
        }); 
        console.log(temRegisterUser);
    }
    const handleSubmit = () => {
        Register(temRegisterUser.firstNames, temRegisterUser.lastNames, temRegisterUser.email, temRegisterUser.password); 
     }
  return (
    <ScrollView styles = {styles.Container} >
        <View style = {styles.InfoContainer}>
            <Text style = {styles.Title}>Registrarse</Text>
            <Text style = {styles.Subtitle}>Únete a nosotros y disfruta de todas las novedades que tenemos dispuestas para ti!</Text>
        </View>
        <View style = {styles.Form}>
            <TextInput style = {styles.Input} placeholder='Nombres' onChangeText={(e)=>{handleChange(e,'firstNames')}}></TextInput>
            <TextInput style = {styles.Input} placeholder='Apellidos' onChangeText={(e) => {handleChange(e,'lastNames')}}></TextInput>
            <TextInput style = {styles.Input} placeholder='correo@gmail.com' onChangeText={(e) => {handleChange(e,'email')}}></TextInput>
            <TextInput style = {styles.Input} placeholder='*****************' onChangeText={(e) => {handleChange(e,'password')}}></TextInput>
            <Pressable style = {styles.Button} onPress={()=>handleSubmit()}>
                <Text style = {styles.ButtonText}>Registrarse</Text>
            </Pressable>
        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    RegisterContainer:{
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
        height:450,
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