import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, ImageBackground, Image } from 'react-native';



export default function Login(){
  return (
    <ImageBackground source={require('../assets/elevator-image.jpg')} style={styles.container}>
    <View style={styles.container}>
    <Text style={styles.welcome}>Elevators Status</Text>
    
    <View style={styles.btnContainer}>
      <TouchableOpacity
      style={styles.userBtn}
      onPress= {() => alert("Status")}>
        <Text style= {styles.btnTxt}>Get The Status</Text>
      </TouchableOpacity>
    </View>
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
  btnTxt: {
    fontSize: 18,
    textAlign: "center"
  }
});