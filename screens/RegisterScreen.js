import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Input, Button } from 'react-native-elements'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Back to Login',
        })
    }, [navigation])

    const register = () =>{
      createUserWithEmailAndPassword(auth, email, password)
      .then(authUser => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL: 
            imageUrl ||
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        })
      })
      .catch((error) => alert(error.message))
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style='light'/>
            <Text h3 style={{marginBottom: 50}}>
                Create a Signal Account
            </Text>
            <View style={styles.inputContainer}>
                <Input 
                  placeholder='Full Name' 
                  type='text' 
                  value={name}
                  onChangeText={(text) => setName(text)} 
                  autoFocus
                  />
                  <Input 
                  placeholder='Email' 
                  type='email' 
                  value={email}
                  onChangeText={(text) => setEmail(text)} 
                  />
                  <Input 
                  placeholder='Password' 
                  type='password' 
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry 
                  />
                  <Input 
                  placeholder='Profile Picture URL (optional)' 
                  type='text' 
                  value={imageUrl}
                  onChangeText={(text) => setName(text)} 
                  onSubmitEditing={register}
                  />
            </View>
            <Button 
              containerStyle={styles.button}
              title='Register' 
              onPress={register} 
              raised
            />
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    inputContainer: {
      width: 300
    },
    button: {
      width: 200,
      marginTop: 10
    },
})
export default RegisterScreen