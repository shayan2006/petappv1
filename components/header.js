import React from "react"
import {View, TextInput, Text} from 'react-native'
import {Header} from 'react-native-elements'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class Appheader extends React.Component {
    render(){
        return(
         <View>
         <SafeAreaProvider>
          <Header 
          centerComponent={{text:this.props.name,style:{color:'#FC351D',fontStyle:'bold',fontSize: 20}}}
          />
         </SafeAreaProvider>
         </View>
        );
    }
}

  