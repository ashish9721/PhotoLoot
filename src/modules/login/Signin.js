import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

//Custom Imports add here
import {Images, color} from '../../Constants';
import {styles} from './styles';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';

import {GraphRequest, GraphRequestManager} from 'react-native-fbsdk';
export default class Signin extends React.Component {
  state = {
    email: '',
    password: '',
    EyeActive: true,
  };

  // constructor(props) {
    // super(props);
    // debugger;
  // }

  navigateWithParams(result) {
    // this.props.navigation.navigate("Home",{userData: result})
    console.warn(result);
  }

  eyeActivity = () => {
    this.setState({
      EyeActive: !this.state.EyeActive,
    });
  };
  onSubmit = () => {
    AsyncStorage.multiGet(
      ['name', 'username', 'email', 'password'],
      (err, res) => {
        console.log(res);

        let email = res[2][1];
        let pass = res[3][1];
        if (this.state.email === email && this.state.password === pass)
          this.props.navigation.navigate('Home');
        else {
          Alert.alert('Invalid email or password');
        }
      },
    );
  };
  fblogin = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      result => {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
        }
        {
          AccessToken.getCurrentAccessToken().then(data => {
            let accessToken = data.accessToken;
            console.log(data.accessToken.toString());
            const responseInfoCallback = (error, result) => {
              if (error) {
                console.log(error);
                // alert('Error fetching data: ' + error.toString());
              } else {
                // console.log(result);
                console.warn('Success fetching data: ' + result);
                // this.navigateWithParams("hello")
                // this.navigationfb();
                // console.warn(this.state)
                // fbresult=result;
                // this.navigateWithParams();
                this.props.navigation.navigate('Home');
              }
              console.warn(fbresult);
            };
            const infoRequest = new GraphRequest(
              '/me',
              {
                accessToken: accessToken,
                parameters: {
                  fields: {
                    string: 'email,name,first_name,middle_name,last_name',
                  },
                },
              },
              responseInfoCallback,
            );
            new GraphRequestManager().addRequest(infoRequest).start();
          });
        }
      },
      function(error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  navigationfb = () => {
    // this.props.navigation.navigate('Home');
    console.warn(this.state);
  };
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
              value={this.state.email}
              onChangeText={text =>
                this.setState({
                  email: text,
                })
              }
              placeholder="Email Address"
              placeholderTextColor={color.placeholderText}></TextInput>
            <View style={styles.inputTextField2Img}></View>
          </View>
          <View style={styles.inputTextField2Container}>
            <TextInput
              style={styles.inputTextField2}
              value={this.state.password}
              onChangeText={text =>
                this.setState({
                  password: text,
                })
              }
              placeholder="Password"
              placeholderTextColor={color.placeholderText}
              secureTextEntry={this.state.EyeActive}
              textContentType="password"></TextInput>
            <TouchableOpacity activeOpacity={0.7} onPress={this.eyeActivity}>
              {this.state.EyeActive ? (
                <Image
                  style={styles.inputTextField2Img}
                  source={Images.EYEINACTIVE}
                />
              ) : (
                <Image
                  style={styles.inputTextField2Img}
                  source={Images.EYEACTIVE}
                />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('ForgotPassword')}
            style={styles.forgotButton}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.onSubmit}
            style={styles.submitBtn}>
            <Text style={styles.submitTxt}>Submit</Text>
          </TouchableOpacity>
          <Text style={styles.connectText}>or Connect With</Text>
          <View style={styles.socialView}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.socialButton}
              onPress={this.fblogin}>
              <Image
                style={styles.sociaImage}
                source={Images.FACEBOOK}
                resizeMode="contain"
              />
              <Text style={styles.socialText}>FaceBook</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('OutOfVotes');
              }}
              activeOpacity={0.8}
              style={styles.socialButton}>
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
              Don't have an account?
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

var fbresult = [];
