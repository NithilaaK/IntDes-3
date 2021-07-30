import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

export default class IntroScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>App Name Goes Here</Text>
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
                this.props.navigation.navigate("LoginScreen")
            }}>
            <Image style={{height: 20, width: 100, alignSelf: 'center'}}
        source={require('../assets/login.png')}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
                this.props.navigation.navigate("SignUpScreen2")
            }}>
            <Image style={{height: 24, width: 130, alignSelf: 'center'}}
        source={require('../assets/signup.png')}/>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0F0',
  },
  button: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#DC3D3D',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  button2: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#DC3D3D',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    marginBottom: 53
  },
  buttonContainer: {
    flex: 1,
  },
});
