import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import IntroScreen from './screens/IntroScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen1 from './screens/SignUpScreen1';
import SignUpScreen2 from './screens/SignUpScreen2';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component{
  render() {
    return (
      <AppContainer />
    )
  }
}
  
  const switchNavigator = createSwitchNavigator({
    IntroScreen: {screen: IntroScreen},
    LoginScreen: {screen: LoginScreen},
    SignUpScreen1: {screen: SignUpScreen1},
    SignUpScreen2: {screen: SignUpScreen2},
    HomeScreen: {screen: HomeScreen},
  });
  
  const AppContainer = createAppContainer(switchNavigator);
