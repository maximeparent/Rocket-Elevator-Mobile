import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from './assets/R2.png';
import { 
  Image, 
  Alert, 
  Button, 
  TextInput, 
  View, 
  Text,
  TouchableHighlight,
  StyleSheet 
} from 'react-native';


export default class Startup extends Component {

    
  constructor(props) {
    console.log(props)

    super(props);
    this.navigation = props.navigation;
    this.state = {
        hasError:false,
        email: '',
        isEmailValide: true
    };

    this.fetchEmployee();
  }
  
  authenticate() {
    const { email } = this.state;

    var employe = {};
    var employeExist = false;
    this.employees.forEach(_employe => {
      if(_employe.email === email ) {
        employe = _employe;
        employeExist = true;
        return;
      }
    });

    if(employeExist)
    {
      this.setState({ hasError: false })
      this.navigation.navigate('Home',{
        employeConnected: employe
      });

    }
    else {

      this.setState({ hasError: true })
    }
  }

  validateEmail(params) {

    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(params.email) === false) 
    {
      this.setState({ isEmailValide: false, email: params.email })
      return false;
    }
    else 
    {
      this.setState({ isEmailValide: true, email: params.email })
    }
  }

  fetchEmployee() {
    var url = 'https://localhost:5001/api/employees/';

    this.employees = [];

    fetch(url)
    .then((response) => {
        return response.json();              
    })
    .then(data => {
        console.log(data);
        this.employees = data; 
    }).catch(error => {
        console.log(error);
    });
  }
  
  render() {

    return (
      <View style={styles.container}>
        <View >
            <Image  style={styles.icon}
                     source={{uri:logo}} 
            /> 
        </View>

        <Text style={styles.welcome}>{"WELCOME to the Mobile Service"}</Text>
        <View>

          <TextInput

            value={this.state.email}
            onChangeText={(email) => this.validateEmail({email})}
            placeholder={'Email'}
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            style={styles.input}
          />
          
        </View>

        <Text style={this.state.isEmailValide? styles.login :  styles.logingErrorMsg }>
          Invalid email
        </Text>

        <Text
          style={this.state.hasError? styles.logingErrorMsg :  styles.login }
          > Authentication fail : Your email does not exist 
        </Text>
        

        <Button
          title={'Login'}
          style={styles.input}
          onPress={() =>  this.authenticate()}
        />       

      </View>

    );
  }
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  loginErrorMsg: {
   display: 'flex',
   margin:10,
   color: 'red',
  },

  login:{
  display:'none'
  },

  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
 
  },
  icon:{
    width:600,
    height: 200,
    top: 10,
  },

  welcome: {
    fontSize: 30,
    color: 'red',
    fontWeight: "bold",

  },
});