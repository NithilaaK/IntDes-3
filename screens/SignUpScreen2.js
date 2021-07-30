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
import { Header, Avatar, Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../config';
import firebase from 'firebase';

export default class SignUpScreen2 extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      profileImageLink: 'https://p.kindpng.com/picc/s/78-785904_block-chamber-of-commerce-avatar-white-avatar-icon.png',
    };
  }





   uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();
    var ref = firebase
      .storage()
      .ref()
      .child('user_profiles/' + imageName);
    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };
  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child('user_profiles/' + imageName);
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ profileImageLink: url });
      })
      .catch((error) => {
        this.setState({
          profileImageLink: '#',
        });
      });
  };
  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!cancelled) {
      this.uploadImage(uri, this.state.userId);
    }
  };




  render() {
    return (
      <SafeAreaProvider>
        <ImageBackground source={require("../assets/logbg.png")} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <Header
              leftComponent={
                <Icon
                  name="close"
                  type="antdesign"
                  color="#000"
                  onPress={() => {
                    this.props.navigation.navigate('IntroScreen');
                  }}
                />
              }
              centerComponent={{
                text: 'Sign Up',
                style: {
                  color: '#000',
                  fontSize: 18,
                  fontWeight: 'bold',
                  fontFamily: 'verdana',
                },
              }}
              backgroundColor="#ffffff70"
            />
          </View>
          <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontFamily: 'verdana',
              textAlign: 'center',
              marginBottom: 12,
              marginTop: 30,
            }}>
            Your Avatar
          </Text>
            <Avatar
            rounded
            source={{ uri: this.state.profileImageLink }}
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
              marginTop: 10,
            }}>
            #2: Personalize!!
          </Text>
          <View style={styles.imageCar}>
          <TouchableOpacity
          onPress={()=>{
              this.setState({
                profileImageLink: 'https://community-whjr.imgix.net/Community_v1_avatars/User+01a.png'
              })
            }}>
            <Image
              style={{ width: 60, height: 60 }}
              source={{uri: 'https://community-whjr.imgix.net/Community_v1_avatars/User+01a.png'}}
            />
          </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
              this.setState({
                profileImageLink: 'https://community-whjr.imgix.net/Community_v1_avatars/User+03a.png'
              })
            }}>
            <Image
              style={{ width: 60, height: 60 }}
              source={{uri: 'https://community-whjr.imgix.net/Community_v1_avatars/User+03a.png'}}
            />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
              this.setState({
                profileImageLink: 'https://community-whjr.imgix.net/Community_v1_avatars/User+05a.png'
              })
            }}>
            <Image
              style={{ width: 60, height: 60 }}
              source={{uri: 'https://community-whjr.imgix.net/Community_v1_avatars/User+05a.png'}}
            />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
              this.setState({
                profileImageLink: 'https://community-whjr.imgix.net/Community_v1_avatars/User+07c.png'
              })
            }}>
            <Image
              style={{ width: 60, height: 60 }}
              source={{uri: 'https://community-whjr.imgix.net/Community_v1_avatars/User+07c.png'}}
            />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text
            style={{
              color: '#000',
              fontSize: 12,
              textAlign:'center',
              fontFamily: 'verdana',
              marginBottom: 12,
              marginTop: 12,
            }}>
            Choose an image above, or 
          </Text>
          <Text
            style={{
              color: '#3C44C0',
              fontSize: 12,
              textAlign:'center',
              fontFamily: 'verdana',
              marginBottom: 12,
              marginTop: 12,
            }}>
            {" "}
          </Text>
          <Text
            style={{
              color: '#3C44C0',
              fontSize: 12,
              textAlign:'center',
              fontFamily: 'verdana',
              marginBottom: 12,
              marginTop: 12,
              textDecorationLine: 'underline',
            }}
            onPress={() => {
              this.selectPicture();
            }}>
            upload an image...
          </Text>
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
  imageCar:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20,
  }
});