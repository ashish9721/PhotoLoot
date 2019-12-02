import React from 'react';
import {View,Image,StyleSheet,Text,TouchableOpacity} from 'react-native';
import  SignUp  from './src/modules/login/SignUp';
import Verification from './src/modules/login/verification';
import CreateAccount from './src/modules/login/createAccount';
import { Verify } from './src/component/functionalComponent/functional';
import Home from './src/modules/home/home';

export default class App extends React.Component{
  render(){
    return(<View style={styles.container}>
        <SignUp/>
        {/* <Verify/> */}
        {/* <Home/> */}
        {/* <Verification/> */}
        {/* <CreateAccount/> */}
    </View>)
  }
} 
const styles = StyleSheet.create({
  container:{flex:1,
  }
})
