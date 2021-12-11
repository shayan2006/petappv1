import React from "react"
import {View, TextInput, TouchableOpacity, Text,} from "react-native"
import Appheader from "../components/header"
import db from '../config'

export default class DogScreen extends React.Component {
  constructor(){
     super()  
     this.state = {
       Breed: '',
       Age: '',
       Description: ''
     }
   }
    render(){
        return(
          <View>
              <Appheader name = 'Dog Page'/>

               <TextInput
              style = {{width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#391DFC',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10}}
        placeholder = {"what breed of dog do you want?"}>
        </TextInput>
              
            <TouchableOpacity
        style = {{width:"25",
        height:35,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderWidth:1,
        backgroundColor:"#0F67B2",
        marginTop:20}}>
        <Text>Search</Text>
        
        
        </TouchableOpacity>

        <TextInput
        style={{width:200,height:30,borderWidth:3,borderColor:'yellow',marginTop:30,alignSelf:'center'}}
        placeholder = {"breed"}>
        onChangeText = {(T3)=>{
          this.setState({
            Breed : T3
          })
        }}
        
        </TextInput>

        <TextInput
        style={{width:200,height:30,borderWidth:3,borderColor:'yellow',marginTop:30,alignSelf:'center'}}
        placeholder = {"Age"}>
        onChangeText = {(T3)=>{
          this.setState({
            Age : T3
          })
        }}
        
        </TextInput>

        <TextInput
        style={{width:200,height:80,borderWidth:3,borderColor:'yellow',marginTop:30,alignSelf:'center'}}
        placeholder = {"description"}>
        onChangeText = {(T3)=>{
          this.setState({
            Description : T3
          })
        }}
        
        </TextInput>

        <TouchableOpacity
        style={{width:200,height:30,borderWidth:3,borderColor:'yellow',marginTop:40,alignSelf:'center'}}
        onPress = {()=>{
        db.collection('Dogs').add({
          breed : this.state.Breed,
          age : this.state.Age,
          description : this.state.Description
        })
        }}>
        <Text>Submit</Text>
        
        </TouchableOpacity>

          </View>
        );
    }
}