import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';



export default function Login({ navigation }){

  const pressHandler = () => {
    navigation.navigate('Home');
    
  }
  return (
    <View style={styles.container}>
    <Text style={styles.welcome}>Login</Text>
    <TextInput style={styles.input} 
    placeholder= "Email"/>
    <View style={styles.btnContainer}>
      <TouchableOpacity
      style={styles.userBtn}
      onPress= {pressHandler}
      >
        <Text style= {styles.btnTxt}>Enter</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 30,
    textAlign:'center',
    margin:10,
    color: "#fff",
    fontFamily: "Roboto"
  },
  input:{
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10
  },
  btnContainer:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  userBtn: {
    backgroundColor: "#FFD700",
    padding: 15,
    width: "45%"
  },
  btnTxt: {
    fontSize: 18,
    textAlign: "center"
  }
});