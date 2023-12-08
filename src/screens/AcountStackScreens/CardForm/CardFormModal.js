import { View, Text, Modal, Pressable, StyleSheet, Alert } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { useData } from '../../../hooks/useData';

export default function CardFormModal(props) {
    const {setIsLoading, isLoading} = useData();
    const {isVisible, setIsVisible} = props;
    const navigator = useNavigation(); 
    const moveToCardScreen = () => {
        setIsLoading(true)
        navigator.navigate('Cards')
    }
    return (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setIsVisible(!isVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Tarjeta agregada con exito !</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setIsVisible(!isVisible)
                    moveToCardScreen();}}>
                  <Text style={styles.textStyle}>Continuar</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
});
    