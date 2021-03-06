import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';



export default function Login({ navigation }){

  const pressHandler2 = () => {
    navigation.navigate('Status');
    
  }
  const logout = () => {
    navigation.navigate('Login');
    
  }
  return (
    <ImageBackground source={require('../assets/elevator-image.jpg')} style={styles.container}>
    <View style={styles.container}>
    <Text style={styles.welcome}>Home</Text>
    <View style={styles.btnContainer}>
      <TouchableOpacity
      style={styles.userBtn}
      onPress= {pressHandler2}
      >
        <Text style= {styles.btnTxt}>Go To Status</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={styles.userBtn2}
      onPress= {logout}
      >
        <Text style= {styles.btnTxt}>Log Out</Text>
      </TouchableOpacity>
  </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: "#2DA2F0",
    padding: 15,
    width: "45%"
  },
  userBtn2: {
    backgroundColor: "#B2B2B2",
    padding: 15,
    width: "45%"
  },
  btnTxt: {
    fontSize: 18,
    textAlign: "center"
  }
});