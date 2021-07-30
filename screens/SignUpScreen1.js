import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from '../config';
import firebase from 'firebase';

export default class SignUpScreen1 extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      confirmPassword: '',
      firstAndLastName: '',
    };
  }

  userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return alert("Password doesn't match or check your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection('users').add({
            first_and_last_name: this.state.firstAndLastName,
            email_id: this.state.emailId,
          });
          this.props.navigation.navigate("SignUpScreen2")
           .catch((error) => {
            var errorMessage = error.message;
            return alert(errorMessage);
          });
        });
    }
  };

  render() {
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
        <Header
        leftComponent={
          <Icon
            name="close"
            type="antdesign"
            color="#000"
            onPress={()=>{
              this.props.navigation.navigate("IntroScreen")
            }}
          />
        }
        centerComponent={{
          text: "Sign Up",
          style: { color: '#000', fontSize: 18, fontWeight: 'bold', fontFamily: 'verdana' },
        }}
        backgroundColor="#ffffff70"
      />
        </View>
        <View style={{alignItems: 'center'}}>
        <Icon
            name="profile"
            type="antdesign"
            color="#000"
            size={100}
          />
          </View>
          <Text
          style={{
             color: '#000', 
             fontSize: 30, 
             fontWeight: 'bold', 
             fontFamily: 'verdana',
             textAlign: 'center',
          }}>#1: Information</Text>
        <View style={styles.buttonContainer}>

        <TextInput
            style={styles.loginBox}
            placeholder="First and Last Name"
            placeholderTextColor="#696969"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />

          <TextInput
            style={styles.loginBox}
            placeholder="example@giveandtake.com"
            placeholderTextColor="#696969"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />

          <TextInput
            style={styles.loginBox2}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#696969"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />

        <TextInput
            style={styles.loginBox2}
            secureTextEntry={true}
            placeholder="Confirm Password"
            placeholderTextColor="#696969"
            onChangeText={(text) => {
              this.setState({
                confirmPassword: text,
              });
            }}
          />
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword);
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flex: 0.25,
  },
  title: {
    fontSize: 30,
    fontFamily: 'verdana',
    color: '#003670',
  },
  img: {
    height: 110,
    width: 110,
    borderRadius: 100,
    alignSelf: 'center',
  },
  loginBox: {
    width: 300,
    height: 40,
    fontFamily: 'verdana',
    borderBottomWidth: 1.5,
    borderColor: '#000',
    fontSize: 20,
    margin: 10,
    marginBottom: -2,
    paddingLeft: 10,
  },
  loginBox2: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: '#000',
    fontSize: 20,
    fontFamily: 'verdana',
    margin: 10,
    paddingLeft: 10,
  },
  button: {
    marginTop: -4,
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#f8bbd0',
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
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#f8bbd0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    color: '#ffff',
    fontWeight: '200',
    fontSize: 20,
    fontFamily: 'verdana',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    backgroundColor: '#f8bbd0',
  },
  signUpContainer: {
    flex: 1,
    borderRadius: 34,
    backgroundColor: '#ffff',
    margin: 30,
    padding: 10,
  },
  formInput: {
    borderBottomWidth: 1.5,
    borderColor: '#ff8a65',
    fontFamily: 'verdana',
    margin: 10,
  },
  label: {
    marginLeft: 10,
    marginBottom: -4,
    fontFamily: 'verdana',
  },
  signUpTitle: {
    justifyContent: 'center',
    fontFamily: 'verdana',
    alignSelf: 'center',
    fontSize: 30,
    color: '#ff8a65',
    margin: 30,
  },
  registerButton: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },
  resgisterButtonText: {
    color: '#ff8a65',
    fontSize: 15,
    fontFamily: 'verdana',
    fontWeight: 'bold',
  },
  cancelButtonText: {
    width: 47,
    height: 30,
    fontFamily: 'verdana',
    marginTop: 7,
  },
});