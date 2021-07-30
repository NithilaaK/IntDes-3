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
  ImageBackground,
} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  render() {
    return (
      <SafeAreaProvider>
        <ImageBackground source={require("../assets/signupbg.png")} style={{width: '100%', height: '100%'}}>
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
          text: "Login",
          style: { color: '#000', fontSize: 18, fontWeight: 'bold', fontFamily: 'verdana' },
        }}
        backgroundColor="#ffffff70"
      />
        </View>
        <Icon
            name="md-person-circle-sharp"
            type="ionicon"
            color="#000"
            size={180}
          />
        <View style={styles.buttonContainer}>
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
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>  
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
