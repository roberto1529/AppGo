import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../config';
import firebase from 'firebase/compat/app';

const otp = () => {

    const [phoneNumber, setphoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificatiId, setverificatiId] = useState(null);
    const recaptchaVerifier = useRef(null);

    const sendVerification = () => {
        const PhoneProvider = new firebase.auth.PhoneAuthProvider();
        PhoneProvider
            .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
            .then(setverificatiId);
        setphoneNumber('');
    };


    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificatiId,
            code
        );
        firebase.auth().signInWithCredential(credential)
            .then(() => {
                setCode('');
            })
            .catch((error) => {
                alert(error)
            })

        Alert.alert(
            'Autenticacion exitosa, Bienvenido a Gonav',
        );
    }

    return (
        <View style={styles.container}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
            <Text style={styles.optText}>
                Gonav One Page
            </Text>
            <TextInput
                placeholder='Ingresa tu Numero con codigo de pais'
                onChangeText={setphoneNumber}
                keyboardType='phone-pad'
                autoCompleteType='tel'
                style={styles.textInput}
            />

            <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
                <Text style={styles.buttonText}>
                    Enviar Codigo de Verifición
                </Text>
            </TouchableOpacity>
            <TextInput
                placeholder='ingresa Codigo OTP'
                onChangeText={setCode}
                keyboardType='number-pad'
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.sendVerification} onPress={confirmCode}>
                <Text style={styles.buttonText}>
                    Confirmar Codigo de Verifición
                </Text>
            </TouchableOpacity>

        </View>
    )
}


export default otp

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        fontSize: 24,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        marginBottom:20,
        textAlign: 'center',
        color: '#000'
    },
    sendVerification: {
        padding: 20,
        backgroundColor: '#3498db',
        borderRadius: 10,

    },
    sendCode: {
        padding: 20,
        backgroundColor: '#',
        borderRadius: 10,
    },
    buttonText:{
        textAlign: 'center',
        color:'#000',
        fontWeight: 'bold',
    },
    optText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        margin: 20
    }
    
})