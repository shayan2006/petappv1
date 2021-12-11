import React from "react"
import {View, TextInput, TouchableOpacity, Text,} from "react-native"
import Appheader from "../components/header"
import db from '../config'

export default class BirdScreen extends React.Component {
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
              <Appheader name = 'Bird Page'/>

              <TextInput
              style = {{width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#65FC1D',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10}}
        placeholder = {"what breed of bird do you want?"}>
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
        style={{width:200,height:30,borderWidth:3,borderColor:'blue',marginTop:30,alignSelf:'center'}}
        placeholder = {"Breed"}>
        onChangeText = {(T1)=>{
          this.setState({
            Breed : T1
          })
        }}
        </TextInput>

        <TextInput
        style={{width:200,height:30,borderWidth:3,borderColor:'blue',marginTop:30,alignSelf:'center'}}
        placeholder = {"Age"}>
        onChangeText = {(T1)=>{
          this.setState({
            Age : T1
          })
        }}
        </TextInput>

        <TextInput
        style={{width:200,height:80,borderWidth:3,borderColor:'blue',marginTop:30,alignSelf:'center'}}
        placeholder = {"description"}>
        onChangeText = {(T1)=>{
          this.setState({
            Description : T1
          })
        }}
        </TextInput>

        <TouchableOpacity
        style={{width:80,height:30,borderWidth:3,borderColor:'blue',marginTop:40,alignSelf:'center'}}
        onPress = {()=>{
        db.collection('Bird').add({
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