import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./screens/welcomeScreen";
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/homeScreen';
import {BottomTab} from "./components/BottomTab"

export default class App extends React.Component {
  render(){
  return (
    <View style={{flex:1}}>
      <Text></Text>
      <AppContainer/>
    </View>
  );
  }
}

const AppNavigator = createSwitchNavigator({
  W1 : WelcomeScreen,
  H1 : BottomTab
})

const AppContainer = createAppContainer(AppNavigator)


