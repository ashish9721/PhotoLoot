import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { color } from '../../Constants/colors';

export default class SignUp extends React.Component {
    render() {
        return (<View style={styles.SignUpContainer}>
            <View style={styles.screenImg}></View>
            <View style={styles.InputFieldContainer}>
                <View style={styles.screenTxtContainer}>
                    <Text style={styles.screenTxt}>Sign Up</Text>
                </View>
                <View style={styles.inputTextField2Container}>
                    <TextInput style={styles.inputTextField2}
                        placeholder="Name"
                        placeholderTextColor={color.placeholderText}
                    ></TextInput>
                    <View style={styles.inputTextField2Img}></View>
                </View>
                <View style={styles.inputTextField2Container}>
                    <TextInput style={styles.inputTextField2}
                        placeholder="Userame"
                        placeholderTextColor={color.placeholderText}
                    ></TextInput>
                    <View style={styles.inputTextField2Img}></View>
                </View>
                <View style={styles.inputTextField2Container}>
                    <TextInput style={styles.inputTextField2}
                        placeholder="Email"
                        placeholderTextColor={color.placeholderText}
                    ></TextInput>
                    <View style={styles.inputTextField2Img}></View>
                </View>
                <View style={styles.inputTextField2Container}>
                    <TextInput style={styles.inputTextField2}
                        secureTextEntry={true}
                        textContentType='password'
                        placeholder="Create Password"
                        placeholderTextColor={color.placeholderText}
                    ></TextInput>
                    <View style={styles.inputTextField2Img}></View>
                </View>
                <View style={styles.checkBoxAndClickableLink}>
                    <View style={styles.checkBoxImg}></View>
                    <Text style={styles.clickableLinkTxt}>I agree to the <Text style={styles.clickableLinkTxt} onPress={() => { console.warn("show terms And Condition"); }} style={styles.TAndC}>Terms And Conditions </Text>of PhotoLoot</Text>
                </View>
                <View style={styles.submitBtn}>
                    <Text style={styles.submitTxt}>Submit</Text>
                </View>
            </View>


        </View>)
    }
}