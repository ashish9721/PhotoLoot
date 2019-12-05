import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
//Custom Imports
import {styles} from './styles';
import {Images, color} from '../../Constants';

export default class Resend extends Component {
  render() {
    return (
      <View style={styles.SignUpContainer}>
        <Image
          style={styles.screenImg}
          source={Images.LOGOORANGE}
          resizeMode="contain"
        />
        <View style={styles.InputFieldContainer}>
          <View style={styles.screenTxtContainer}>
            <Text style={styles.screenTxt}>Reset Password</Text>
          </View>
          <Text style={styles.verifyTxt}>
            Please enter your Password below.
          </Text>
          <View style={styles.inputTextField2Container}>
            <TextInput
              style={styles.inputTextField2}
              placeholder="New Password"
              placeholderTextColor={color.placeholderText}></TextInput>
            <Image
              style={styles.inputTextField2Img}
              source={Images.EYEINACTIVE}
            />
          </View>
          <TouchableOpacity activeOpacity={0.8} 
          onPress={()=>this.props.navigation.navigate('ResetPasswordModal')}
          style={styles.submitBtn}>
            <Text style={styles.submitTxt}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
