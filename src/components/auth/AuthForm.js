import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useState, useEffect} from 'react'
import Login from './Login';
import Register from './Register'; 

export default function AuthForm() {
    const [isRegistred, setIsRegistred] = useState(true); 
    const handleStateRegister = () => {
        setIsRegistred(!isRegistred); 
        console.log('Boton presionado');
    }
    useEffect(() => {
        console.log(isRegistred);
    },[isRegistred])
    return (
        <SafeAreaView style = {styles.ContainerAuth}>
            {isRegistred ? <Login/> : <Register/>}
            <View>
                {
                    isRegistred ? (
                        <View style = {styles.ContainerQuestion}>                            
                            <Text style = {styles.Question}>Aún no tienes cuenta?</Text>
                            <Pressable style = {styles.QuestionButton} onPress={handleStateRegister}>
                                <Text style = {styles.QuestionButtonText}>Registrate</Text> 
                            </Pressable>
                        </View>
                    ) : (
                        <View style = {styles.ContainerQuestion}>
                            <Text style = {styles.Question}>Ya tienes cuenta?</Text>
                            <Pressable style = {styles.QuestionButton} onPress={handleStateRegister}>
                                <Text style = {styles.QuestionButtonText} >Inicia sesión</Text> 
                            </Pressable>
                        </View>
                    ) 
                }
            </View>
        </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    ContainerAuth:{
        backgroundColor:'#264653',
        width:'100%', 
        height:'100%', 
    }, 
    ContainerQuestion:{
        backgroundColor:'white',
        paddingLeft:10,
        width:'100%',
        height:81,
        display:'flex',
        flexDirection: 'row',
        alignItems:'center', 
        gap:4,  
    },
    Question:{
        color:'gray',
        fontWeight:'700',
    },
    QuestionButton:{
        backgroundColor:'#264653',
        padding:8,
        borderRadius:20,
    },
    QuestionButtonText:{
        fontWeight:'800',
        color:'white',
    }
}); 