import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Image, Input } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { auth } from '../firebase'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPaassword] = useState('')

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      console.log(authUser)
      if(authUser){
        navigation.replace('Home');
      }
    })

    return unsubscribe

  }, [])
  const signIn = () =>{

  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style='light'/>  
      <Image 
      source={{
        url: "https://previews.123rf.com/images/stockgiu/stockgiu1807/stockgiu180707530/105877881-chat-bubble-text-message-icon-vector-illustration.jpg",
      }}
      style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input 
        placeholder='Email' 
        type='email' 
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoFocus
        />
        <Input 
        placeholder='Password' 
        type='password' 
        value={password}
        onChangeText={(text) => setPaassword(text)}
        />
      </View>

      <Button containerStyle={styles.button}  title='Login' onPress={signIn}/>
      <Button containerStyle={styles.button} type='outline' title='Register' onPress={() => navigation.navigate('Register')}/>
      <View style={{ height: 100}} />
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

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