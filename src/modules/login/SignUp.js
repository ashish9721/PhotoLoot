import React from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {color, Images} from '../../Constants/';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default class SignUp extends React.Component {
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
                placeholderTextColor={color.placeholderText}></TextInput>
              <View style={styles.inputTextField2Img}></View>
            </View>
            <View style={styles.inputTextField2Container}>
              <TextInput
                style={styles.inputTextField2}
                placeholder="Userame"
                placeholderTextColor={color.placeholderText}></TextInput>
              <View style={styles.inputTextField2Img}></View>
            </View>
            <View style={styles.inputTextField2Container}>
              <TextInput
                style={styles.inputTextField2}
                placeholder="Email"
                placeholderTextColor={color.placeholderText}></TextInput>
              <View style={styles.inputTextField2Img}></View>
            </View>
            <View style={styles.inputTextField2Container}>
              <TextInput
                style={styles.inputTextField2}
                secureTextEntry={true}
                textContentType="password"
                placeholder="Create Password"
                placeholderTextColor={color.placeholderText}></TextInput>
              <View style={styles.inputTextField2Img}></View>
            </View>
            <View style={styles.checkBoxAndClickableLink}>
              <Image
                style={styles.checkBoxImg}
                source={Images.VALID}
                resizeMode="contain"
              />
              <Text style={styles.clickableLinkTxt}>
                I agree to the{' '}
                <Text
                  onPress={() => {
                    console.warn('show terms And Condition');
                  }}
                  style={styles.TAndC}>
                  Terms And Conditions{' '}
                </Text>
                of PhotoLoot
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate('Verification')}
              style={styles.submitBtn}>
              <Text style={styles.submitTxt}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
