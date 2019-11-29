import React from 'react';
import {View,Image,StyleSheet,Text,TouchableOpacity} from 'react-native';
import  SignUp  from './src/modules/login/SignUp';

export default class App extends React.Component{
  render(){
    return(<View style={styles.container}>
        <SignUp/>
    </View>)
  }
} 
const styles = StyleSheet.create({
  container:{flex:1,
  }
})