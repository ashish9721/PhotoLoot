import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
//Custom Imports
import {styles} from './styles';
import {Images, color, Strings} from '../../Constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AsyncStorage from '@react-native-community/async-storage';

export default class Resend extends Component {
  state = {
    EyeActive: false,
    pass: '',
  };
  eyeActivity = () => {
    this.setState({
      EyeActive: !this.state.EyeActive,
    });
  };
  onSubmit = () => {
    this.props.navigation.navigate('VerificationModal', {
      title: 'Password reset successfully',
      detail: Strings.RESETPASSWORDTEXT,
      image: Images.SUCCESSGRAPHIC,
    });
    AsyncStorage.setItem('password', this.state.pass, () => {
      console.log(
        AsyncStorage.multiGet(
          ['name', 'username', 'email', 'password'],
          (err, res) => {
            console.log(res);
          },
        ),
      );
    });
  };
  render() {
    return (
      <KeyboardAwareScrollView>
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
                value={this.state.pass}
                onChangeText={text => {
                  this.setState({
                    pass: text,
                  });
                }}
                style={styles.inputTextField2}
                placeholder="New Password"
                secureTextEntry={!this.state.EyeActive}
                textContentType="password"
                placeholderTextColor={color.placeholderText}></TextInput>
              <TouchableOpacity activeOpacity={0.7} onPress={this.eyeActivity}>
                {this.state.EyeActive ? (
                  <Image
                    style={styles.inputTextField2Img}
                    source={Images.EYEACTIVE}
                  />
                ) : (
                  <Image
                    style={styles.inputTextField2Img}
                    source={Images.EYEINACTIVE}
                  />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={this.onSubmit}
              style={styles.submitBtn}>
              <Text style={styles.submitTxt}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
