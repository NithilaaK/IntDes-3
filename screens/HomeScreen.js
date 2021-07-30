import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { Card, Header, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      userName: '',
    };
    this.requestRef = null;
  }

  getDonorDetails = (donorId) => {
    db.collection('users')
      .where('email_id', '==', this.state.userId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            userName: doc.data().first_and_last_name,
          });
        });
      });
  };

  componentDidMount(){
    this.getDonorDetails();
  }

  render() {
    return (
      <SafeAreaProvider>
        <ImageBackground source={require("../assets/homebg.png")} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <ScrollView>
        <Header
        leftComponent={
          <Icon
            name="close"
            type="antdesign"
            color="#000"
            onPress={()=>{
              
            }}
          />
        }
        centerComponent={{
          text: "Home",
          style: { color: '#000', fontSize: 18, fontWeight: 'bold', fontFamily: 'verdana' },
        }}
        backgroundColor="#ffffff70"
      />

        <Text>Hello!!!!!, {this.state.userName}</Text>
            <Card>
              <View style={{
                alignItems: 'center'
              }}>
                <Text>Customization Tips</Text>
                <View style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}>
                  <Card
                  containerStyle={{
                    padding: 30,
                    width: 200,
                    alignItems: 'center',
                    borderBottomLeftRadius: 25,
                  }}>
                    <Icon
                    name="home"
                    type="antdesign"/>
                    <Text>Living Room</Text>
                  </Card>
                  <Card
                  containerStyle={{
                    padding: 30,
                    width: 200,
                    alignItems: 'center',
                    borderBottomLeftRadius: 25,
                  }}>
                    <Icon
                    name="silverware-fork-knife"
                    type="materialcommunityicons"/>
                    <Text>Dining Room</Text>
                  </Card>
                  <Card
                  containerStyle={{
                    padding: 30,
                    width: 200,
                    alignItems: 'center',
                    borderBottomLeftRadius: 25,
                  }}>
                    <Icon
                    name="bed-outline"
                    type="ionicons"/>
                    <Text>Bedroom</Text>
                  </Card>
                  <Card
                  containerStyle={{
                    padding: 30,
                    width: 200,
                    alignItems: 'center',
                    borderBottomLeftRadius: 25,
                  }}>
                    <Icon
                    name=""/>
                    <Text>Bathroom</Text>
                  </Card>
                </View>
              </View>
          </Card>
        </ScrollView>
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
  subtitle: {
    flex: 0.9,
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 160,
    fontFamily: 'monserrat',
  },
});