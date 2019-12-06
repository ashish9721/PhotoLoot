import React from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
//Custom Imports add here
import {Images, color} from '../../Constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {styles} from './styles';
export default class Signin extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.SignInContainer}>
          <Image style={styles.screenImg} source={Images.LOGOORANGE} />
          <View style={styles.screenTxtContainer}>
            <Text style={styles.screenTxt}>Sign In</Text>
          </View>
          <View style={styles.inputTextField2Container}>
            <TextInput
              style={styles.inputTextField2}
              placeholder="Email Address"
              placeholderTextColor={color.placeholderText}></TextInput>
            <View style={styles.inputTextField2Img}></View>
          </View>
          <View style={styles.inputTextField2Container}>
            <TextInput
              style={styles.inputTextField2}
              placeholder="Password"
              placeholderTextColor={color.placeholderText}></TextInput>
            <Image
              style={styles.inputTextField2Img}
              source={Images.EYEINACTIVE}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('ForgotPassword')}
            style={styles.forgotButton}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.submitBtn}>
            <Text style={styles.submitTxt}>Submit</Text>
          </TouchableOpacity>
          <Text style={styles.connectText}>or Connect With</Text>
          <View style={styles.socialView}>
            <TouchableOpacity activeOpacity={0.8} style={styles.socialButton}>
              <Image
                style={styles.sociaImage}
                source={Images.FACEBOOK}
                resizeMode="contain"
              />
              <Text style={styles.socialText}>FaceBook</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>{this.props.navigation.navigate('Congratulations')}}
            activeOpacity={0.8} style={styles.socialButton}>
              <Image
                style={styles.sociaImage}
                source={Images.INSTAGRAM}
                resizeMode="contain"
              />
              <Text style={styles.socialText}>Instagram</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.clickableLinkContVerification}>
            <Text style={styles.dontHaveText}>
              Don't have an account
              <Text
                style={styles.SignUpText}
                onPress={() => {
                  this.props.navigation.navigate('SignUp');
                }}>
                {' '}
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
