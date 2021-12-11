import React from "react"
import {View, TextInput, TouchableOpacity, Text,} from "react-native"
import Appheader from "../components/header"
import {BottomTab} from "../components/BottomTab"
import {createAppContainer} from 'react-navigation'

export default class HomeScreen extends React.Component {
    render(){
        return(
          <View style={{flex:1}}>
              <Appheader name = 'Pet App'/>
              <Text>home screen</Text>
          
          </View>
        );
    }
}
//const AppContainer = createAppContainer(BottomTab)