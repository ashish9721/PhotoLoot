import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

//Custom Imports
import {styles} from './styles';
import {color, Images} from '../../Constants/';
import {signUpDataList, updateState} from '../../action/action';

class SignUp extends React.Component {
  state = {
    check: false,
  };

  updateInputText(key, value) {
    return this.props.updateState(key, value);
  }
  checkTerms = () => {
    this.setState({
      check: !this.state.check,
    });
  };
  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  onSubmit = () => {
    const name = ['name', this.props.name];
    const userName = ['username', this.props.userName];
    const email = ['email', this.props.email];
    const password = ['password', this.props.password];
    try {
      AsyncStorage.multiSet([name, userName, email, password]);
    } catch (e) {
      //save error
    }
    if (
      this.state.check &&
      this.props.name.length > 0 &&
      this.props.userName.length > 0 &&
      this.props.email.length > 0 &&
      this.props.password.length > 0
    )
      this.props.navigation.navigate('Login');
    else {
      Alert.alert('Please fill all the details');
    }
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
              <Text style={styles.screenTxt}>Sign Up</Text>
            </View>
            <View style={styles.inputTextField2Container}>
              <TextInput
                style={styles.inputTextField2}
                placeholder="Name"
                value={this.props.name}
                onChangeText={text => this.updateInputText('name', text)}
                placeholderTextColor={color.placeholderText}></TextInput>
              <View style={styles.inputTextField2Img}></View>
            </View>
            <View style={styles.inputTextField2Container}>
              <TextInput
                onChangeText={text => this.updateInputText('userName', text)}
                style={styles.inputTextField2}
                value={this.props.userName}
                placeholder="Userame"
                placeholderTextColor={color.placeholderText}></TextInput>
              <View style={styles.inputTextField2Img}></View>
            </View>
            <View style={styles.inputTextField2Container}>
              <TextInput
                style={styles.inputTextField2}
                placeholder="Email"
                value={this.props.email}
                onChangeText={text => this.updateInputText('email', text)}
                placeholderTextColor={color.placeholderText}></TextInput>
              <View style={styles.inputTextField2Img}></View>
            </View>
            <View style={styles.inputTextField2Container}>
              <TextInput
                style={styles.inputTextField2}
                secureTextEntry={true}
                textContentType="password"
                placeholder="Create Password"
                value={this.props.password}
                onChangeText={text => this.updateInputText('password', text)}
                placeholderTextColor={color.placeholderText}></TextInput>
              <View style={styles.inputTextField2Img}></View>
            </View>
            <View style={styles.checkBoxAndClickableLink}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={this.checkTerms}
                style={styles.checkboxButtonContainer}>
                {this.state.check && (
                  <Image
                    style={styles.checkBoxImg}
                    source={Images.VALID}
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.clickableLinkTxt}>
                I agree to the{' '}
                <Text
                  onPress={() => {
                    this.props.navigation.navigate('TnC');
                  }}
                  style={styles.TAndC}>
                  Terms And Conditions{' '}
                </Text>
                of PhotoLoot
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              disabled={this.state.disabled}
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

const mapStateToProps = state => {
  console.log('state return is', state.signingReducer);
  // const {signUpData} = state.signingReducern;
  const {name, userName, email, password} = state.signingReducer[0];
  return {
    // signUpData,
    name,
    userName,
    email,
    password,
  };
};
const mapDispatchToProps = dispatch => ({
  signUpDataList: payload => dispatch(signUpDataList(payload)),
  updateState: (key, value) => dispatch(updateState(key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
