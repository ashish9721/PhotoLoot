import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
//Custom Imports
import {styles} from './styles';
import {Images, color, Strings} from '../../Constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default class Verification extends Component {
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
              <Text style={styles.screenTxt}>Verification</Text>
            </View>
            <Text style={styles.verifyTxt}>
              To verify it’s you please enter the OTP sent to your registered
              email ID.
            </Text>
            <View style={styles.inputTextField2Container}>
              <TextInput
                style={styles.inputTextField2}
                placeholder="Enter OTP"
                placeholderTextColor={color.placeholderText}></TextInput>
              <View style={styles.inputTextField2Img}></View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate('Resend')}
              style={styles.submitBtn}>
              <Text style={styles.submitTxt}>Submit</Text>
            </TouchableOpacity>
            <View style={styles.clickableLinkContVerification}>
              <Text style={styles.dontHaveText}>
                Didn't Receive OTP?
                <Text
                  onPress={() => {
                    this.props.navigation.navigate('VerificationModal', {
                      title: 'Verification Successful',
                      detail: Strings.VERIFYTEXT,
                      image: Images.SUCCESSGRAPHIC,
                    });
                  }}
                  style={styles.SignUpText}>
                  {' '}
                  Resend
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
