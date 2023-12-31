import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CreditCardInput } from 'react-native-credit-card-input'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Field } from 'formik'
import { Modal } from 'react-native-web'
import { updateListCardsOnUser } from '../../../../services/Firebase/FirestoreFuncions'
import CardFormModal from './CardFormModal'
import {useData} from '../../../hooks/useData.js'

export default function CardForm() {
    const { userInfoDb } = useData();
    const [status, setStatus] = useState(null)
    const [card, setCard] = useState({
        number:'',
        cvc:'',
        expiry:'',
        type:'',
    }); 
    const [isVisible, setIsVisible] = useState(false); 
    _onChange = (formData) => {
        setStatus(formData.status)
        setCard(formData.values)
        console.log(card);
        console.log(status);
    };

    const handleSubmit = () => {
        try {            
            if (status.cvc != "invomplete", status.expiry != "incomplete",status.number != "incomplete" ) {            
                updateListCardsOnUser(userInfoDb.id,card);
                setIsVisible(!isVisible); 
            }
        } catch (error) {
            console.log(error);
        }
    }
 return (
    <SafeAreaView>
        <ScrollView>
        <Text style={styes.CardFormTitle}>Ingrese sus datos</Text>
        <CreditCardInput 
            onfocus
            requiresCVC = {true}
            validColor = "black" 
            invalidColor = 'red'
            labelStyle = {{color: 'black', fontSize:12}}
            inputStyle = {{color: 'black', fontSize:16}}
            onFocus={this._onFocus}
            onChange={this._onChange}
        />
        </ScrollView>
        <View style={styes.ContainerButton}>
            <Pressable style= {styes.Button} onPress={()=>{handleSubmit()}}>
                <Text style = {styes.ButtonText}>Guardar Cambios</Text>
                {/* <Icon name='credit-card' color={'white'} size={20}/> */}
            </Pressable>
        </View>
        <CardFormModal isVisible = {isVisible} setIsVisible = {setIsVisible}/>

    </SafeAreaView>
  )
}
const styes = StyleSheet.create({
    CardFormTitle:{
      marginTop:45,
      marginBottom:20,
      width:'100%',
      fontWeight:'300',
      fontSize:25,
      paddingLeft:20,
    },
    ContainerButton:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    Button:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        marginTop:30,
        backgroundColor:'white',
        width:'80%',
        padding:20,
        borderRadius:10,
    },
    ButtonText:{
        textAlign:'center',
        color:'black',
        fontWeight:'500',
        fontSize:15,
    }
  })