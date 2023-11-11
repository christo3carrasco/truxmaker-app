import { View, Text, StyleSheet, Pressable, TextInput, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Login(props) {
    const [user,SetUser] = useState({
        email:'', 
        password:'', 
    })
  return (
    <ScrollView styles = {styles.LoginContainer} >
        <View style = {styles.LoginInfoContainer}>
            <Text style = {styles.LoginTitle}>Iniciar Sesión</Text>
            <Text style = {styles.LoginSubtitle}>Disfruta de todas las novedades que tenemos dispuestas para ti!</Text>
        </View>
        <View style = {styles.LoginForm}>
            <TextInput style = {styles.Input} placeholder='example@gmail.com'></TextInput>
            <TextInput style = {styles.Input} placeholder='*****************'></TextInput>
            <Pressable style = {styles.LoginButton}>
                <Text style = {styles.LoginButtonText}>Login</Text>
            </Pressable>
            <Text style = {styles.MoreOptionsSeparator}>o</Text>
            <Pressable style={styles.LoginButton}>
                <Icon name='google' size={20} color={'white'}/>
                <Text style = {styles.LoginButtonText}>Continuar con google</Text>
            </Pressable>
            <Pressable style = {styles.LoginButton}>
                <Icon name='facebook' size={20} color={'white'}/>
                <Text style = {styles.LoginButtonText}>Continuar con facebook</Text>
            </Pressable>
        </View>
    </ScrollView>
    
  )
}
const styles = StyleSheet.create({
    LoginContainer:{
        position:'relative', 
        width:'100%',
        height:'400',
    },
    LoginInfoContainer:{
        padding:15,
        paddingTop:50,
        backgroundColor:'#264653', 
        height:'auto',
    },
    LoginTitle:{
        fontSize:35,
        fontWeight:'900',
        color:'#e9c46b',
    }, 
    LoginSubtitle:{
        fontWeight:'700',
        color:'#e9c46b',
    },
    LoginForm:{
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
    LoginButton:{
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
    LoginButtonText:{
        color:'white',
        fontWeight:'700',
    },
    MoreOptionsSeparator:{
        textAlign:'center',
        fontSize:20,
    },
});