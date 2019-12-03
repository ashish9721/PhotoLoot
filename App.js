import React from 'react';
import {View,Image,StyleSheet,Text,TouchableOpacity} from 'react-native';
import  SignUp  from './src/modules/login/SignUp';
import Verification from './src/modules/login/verification';
import CreateAccount from './src/modules/login/createAccount';
import { Verify } from './src/component/functionalComponent/functional';
import Home from './src/modules/home/home';
import Profile from './src/modules/profile/profile';
import Edit from './src/modules/profile/edit';
import Splash from './src/modules/splash/splash';

export default class App extends React.Component{
  render(){
    return(<View style={styles.container}>
        {/* <SignUp/> */}
        {/* <Verify/> */}
        {/* <Home/> */}
        {/* <Verification/> */}
        {/* <CreateAccount/> */}
        {/* <SplashScreen/> */}
        {/* <Profile/> */}
        {/* <Edit/> */}
        <Splash/>
    </View>)
  }
} 
const styles = StyleSheet.create({
  container:{flex:1,
  }
})
