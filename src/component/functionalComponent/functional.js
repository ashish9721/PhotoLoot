import React from 'react';
import { View ,TextInput,StyleSheet,Text,} from 'react-native';
import { color } from '../../Constants/colors'
import {styles} from '../../modules/login/styles.js'



const Verify = () => {
    return (
        <View style={styles.SignUpContainer}>
            <View style={styles.screenImg}></View>
            <View style={styles.InputFieldContainer}>
                <View style={styles.screenTxtContainer}>
                    <Text style={styles.screenTxt}>Verification</Text>
                </View>
                <Text style={styles.verifyTxt}>To verify it’s you please enter the OTP sent to your
registered email ID.</Text>
                <View style={styles.inputTextField2Container}>
                    <TextInput style={styles.inputTextField2}
                        placeholder="Enter OTP"
                        placeholderTextColor={color.placeholderText}
                    ></TextInput>
                    <View style={styles.inputTextField2Img}></View>
                </View>
                <View style={styles.submitBtn}>
                    <Text style={styles.submitTxt}>Submit</Text>
                </View>
                <View style={styles.clickableLinkContVerification} >
                    <Text style={styles.clickableLinkTxt}>Didn't Receive OTP?<Text style={styles.clickableLinkTxt} onPress={() => { console.warn("Resend"); }} style={styles.TAndC}> Resend</Text></Text>
                </View>
            </View>

        </View>
    )
}

export { Verify }