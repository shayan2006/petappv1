import React from "react"
import {View, TextInput, Text, TouchableOpacity} from "react-native"

export default class Register extends React.Component {
    constructor(){
        super()
        this.state = {
            firstname : '',
            lastname : '',
            address : '',
            contact : '',
            emailId : '',
            password : '',
        }
    }
    render(){
        return(
          <View>
            <TextInput
            style = {{width:200,height:200,borderWidth:3}}
            placeholder = {"firstname"}
            maxLength = {10}
            onChangeText = {(t1)=>{
                this.setState({firstname: t1})
            }}
            
            value = {this.state.firstname}>
            </TextInput>

            <TextInput
            style = {{width:200,height:200,borderWidth:3}}
            placeholder = {"lastname"}
            maxlength = {10}
            onChangeText = {(t1)=>{
                 this.setState({lastname: t1})
            }}
            
            value = {this.state.lastname}>
            </TextInput>

            <TextInput
            style = {{width:200,height:200,borderWidth:3}}
            placeholder = {"address"}
            maxlength = {10}
            onChangeText = {(t1)=>{
                this.setState({address: t1})
            }}
            
            value = {this.state.address}>
            </TextInput>

            <TextInput
            style = {{width:200,height:200,borderWidth:3}}
            placeholder = {"contact"}
            maxlength = {10}
            onChangeText = {(t1)=>{
                this.setState({contact: t1})
            }}
            
            value = {this.state.contact}>
            </TextInput>

            <TextInput
            style = {{width:200,height:200,borderWidth:3}}
            placeholder = {"emailId"}
            maxlength = {10}
            onChangeText = {(t1)=>{
                this.setState({emailId: t1})
            }}
            
            value = {this.state.emailId}>
            </TextInput>

            <TextInput
            style = {{width:200,height:200,borderWidth:3}}
            placeholder = {"password"}
            maxlength = {10}
            onChangeText = {(t1)=>{
                this.setState({password: t1})
            }}
            
            value = {this.state.password}
            secureTextEntry = {true}>
            </TextInput>

            <TouchableOpacity
            style={{width:200,height:30,borderWidth:3}}
            onPress = {()=>{

            }}>
            <Text>sign up</Text>
            </TouchableOpacity>
          </View>
        );
    }
}